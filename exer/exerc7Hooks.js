import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Thiago', idade: '30' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, gato: 'Tem dois' });
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.gato}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};

export default App;
