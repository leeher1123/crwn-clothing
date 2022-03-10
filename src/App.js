import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='hats' element={<HatsPage />}></Route>
    </Routes>
  );
}

export default App;
