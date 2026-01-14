import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Supplies from './pages/Supplies';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/supplies" element={<Supplies />} />
    </Routes>
  );
}

export default App;
