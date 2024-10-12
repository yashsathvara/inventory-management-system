import React from 'react';

const SupplierList = () => {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    return (
        <div className="supplier-list">
            <h2>Supplier List</h2>
            <ul>
                {suppliers.map(supplier => (
                    <li key={supplier.id}>
                        <strong>{supplier.name}</strong> - {supplier.contact}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupplierList;
