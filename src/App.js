// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Importe o novo componente
import ConsultaElemento from './components/ConsultaElemento';
import AdicionarElemento from './components/AdicionarElemento';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/consulta" element={<ConsultaElemento />} />
          <Route path="/adicionar" element={<AdicionarElemento />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

