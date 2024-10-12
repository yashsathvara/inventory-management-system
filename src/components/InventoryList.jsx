import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryList = ({ items, suppliers }) => {
    const [inventory, setInventory] = useState(items);
    const navigate = useNavigate();

    // Delete item function
    const handleDelete = (index) => {
        const updatedItems = inventory.filter((_, i) => i !== index);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setInventory(updatedItems);
    };

    // Edit item function (redirect to form with the item data)
    const handleEdit = (index) => {
        const itemToEdit = inventory[index];
        localStorage.setItem('editItem', JSON.stringify({ item: itemToEdit, index }));
        navigate('/edit-inventory');
    };

    return (
        <div className="inventory-list">
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Stock Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item, index) => {
                        const supplier = suppliers.find(s => s.id.toString() === item.supplierId.toString());
                        const stockLevel = item.quantity > 500 ? 'green' : 'red';
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>
                                <td>{supplier ? supplier.name : 'Unknown'}</td>
                                <td style={{ color: stockLevel }}>
                                    {item.quantity > 500 ? 'Sufficient' : 'Low'}
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryList;
