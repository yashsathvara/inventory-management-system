import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InventoryItemForm from './components/InventoryItemForm';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <h1>Inventory Management System</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-inventory" element={<InventoryItemForm />} />
        <Route path="/edit-inventory" element={<InventoryItemForm />} />
        <Route path="/add-supplier" element={<SupplierForm />} />
        <Route path="/supplier-list" element={<SupplierList />} />
      </Routes>
    </div>
  );
};

export default App;
