import React from 'react';
import './AppAnimacao.css';
import ProdutoAnimacao from './ProdutoAnimacao';

const App = () => {
  const [ativar, setAtivar] = React.useState(false);
  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <ProdutoAnimacao />}
    </div>
  );
};

export default App;
