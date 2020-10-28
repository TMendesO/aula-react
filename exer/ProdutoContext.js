import React from 'react';
import { UserContext } from './UserContext';

const ProdutoContext = () => {
  const global = React.useContext(UserContext);
  console.log(global);
  if (global.dados === null) return null;

  return (
    <div>
      Produto:{' '}
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default ProdutoContext;
