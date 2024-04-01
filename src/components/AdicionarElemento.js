import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import './AdicionarElemento.css';

const ADICIONAR_ELEMENTO = gql`
mutation adicionarElemento($nome: String!, $massaAtomica: Float!, $numeroAtomico: Int!) {
  adicionarElemento(nome: $nome, massaAtomica: $massaAtomica, numeroAtomico: $numeroAtomico) {
    id
    nome
    massaAtomica
    numeroAtomico
  }
}
`;

function AdicionarElemento() {
  const [nome, setNome] = useState('');
  const [massaAtomica, setMassaAtomica] = useState('');
  const [numeroAtomico, setNumeroAtomico] = useState('');

  const [adicionarElemento, { data, loading, error }] = useMutation(ADICIONAR_ELEMENTO);

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarElemento({
      variables: {
        nome,
        massaAtomica: parseFloat(massaAtomica),
        numeroAtomico: parseInt(numeroAtomico, 10),
      },
    });
  };

  if (loading) return <p>Adicionando...</p>;
  if (error) return <p>Erro ao adicionar elemento.</p>;

  return (
    <div className="form-container">
     <h2>Adicionar Novo Elemento Químico</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome do Elemento"
          required
        />
        <input
          value={massaAtomica}
          onChange={(e) => setMassaAtomica(e.target.value)}
          type="number"
          placeholder="Massa Atômica"
          step="0.01"
          required
        />
        <input
          value={numeroAtomico}
          onChange={(e) => setNumeroAtomico(e.target.value)}
          type="number"
          placeholder="Número Atômico"
          required
        />
        <button type="submit">Adicionar Elemento</button>
      </form>
      {data && <p>Elemento {data.adicionarElemento.nome} adicionado com sucesso!</p>}
    </div>
  );
}

export default AdicionarElemento;
