import React from 'react';
import './App.css';
import Header from './Header';

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }

  // if (action === 'aumentar') {
  //   return state + 1;
  // }
  // if (action === 'diminuir') {
  //   return state - 1;
  // } else {
  //   return new Error('Erro action não existe');
  // }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <Header />
      <button onClick={() => dispatch('aumentar')}>+</button>

      <button onClick={() => dispatch('diminuir')}>-</button>
      <button onClick={() => dispatch('dividir')}>/</button>
      <p>{state}</p>
    </div>
  );
};

export default App;
