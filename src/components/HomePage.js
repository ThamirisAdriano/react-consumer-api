// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Certifique-se de importar o arquivo CSS

function HomePage() {
  return (
    <>
      <div className="homePageBackground"></div>
      <div className="content">
        <h1>Bem-vindo ao App de Elementos Químicos</h1>
        <Link to="/consulta">Consultar Elementos</Link>
        <br />
        <Link to="/adicionar">Adicionar Elemento</Link>
      </div>
    </>
  );
}

export default HomePage;

