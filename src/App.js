import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='shop' element={<ShopPage />} />
    </Routes>
  );
}

export default App;
