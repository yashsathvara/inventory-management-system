import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Inventory Dashboard</Link>
            <Link to="/add-inventory">Add Inventory Item</Link>
            <Link to="/add-supplier">Add Supplier</Link>
            <Link to="/supplier-list">Supplier List</Link>
        </div>
    );
};

export default Header;
