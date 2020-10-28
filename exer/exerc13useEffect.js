import React from 'react';
import ProdutoModal from './ProdutoModalExec13';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      {ativo && <ProdutoModal />}

      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default App;
