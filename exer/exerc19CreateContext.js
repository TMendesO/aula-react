import React from 'react';
import ProdutoContext from './ProdutoContext';
import { ContextStorage } from './UserContext';

const App = () => {
  return (
    <ContextStorage>
      <ProdutoContext />
    </ContextStorage>
  );
};

export default App;
