import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Supplies from './pages/Supplies';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/supplies" element={<Supplies />} />
      </Routes>
    </Router>
  );
}

export default App;
