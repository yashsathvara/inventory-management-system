import React from 'react';
import InventoryList from './InventoryList';

const Dashboard = () => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    return (
        <div className="dashboard">
            <h2>Inventory Dashboard</h2>
            <InventoryList items={items} suppliers={suppliers} />
        </div>
    );
};

export default Dashboard;
