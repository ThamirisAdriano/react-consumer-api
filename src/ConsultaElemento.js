import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import './ConsultaElemento.css';

const GET_ELEMENTO_POR_NOME = gql`
  query getElementoPorNome($nome: String!) {
    elemento(nome: $nome) {
      nome
      massaAtomica
      numeroAtomico
    }
  }
`;

function ConsultaElemento() {
  const [nome, setNome] = useState('');
  const [getElemento, { called, loading, data }] = useLazyQuery(GET_ELEMENTO_POR_NOME);

  if (loading) return <p>Carregando...</p>;
  if (called && !loading && data) {
    return (
      <div>
        <p>Nome: {data.elemento.nome}</p>
        <p>Massa Atômica: {data.elemento.massaAtomica}</p>
        <p>Número Atômico: {data.elemento.numeroAtomico}</p>
      </div>
    );
  }

  return (
    <div className="consulta-elemento">
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Digite o nome do elemento"
      />
      <button onClick={() => getElemento({ variables: { nome } })}>Buscar Elemento</button>
    </div>
  );
}

export default ConsultaElemento;
