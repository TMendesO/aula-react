import React from 'react';
import useCustonHook1 from './useCustonHook1';

const App = () => {
  const [produto, setProduto] = useCustonHook1('produto', '');
  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Srmatphone</button>
    </div>
  );
};

export default App;
