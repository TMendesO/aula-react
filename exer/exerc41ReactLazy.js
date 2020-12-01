import React from 'react';
import './App.css';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativo, setAtivo] = React.useState();
  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<div>carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Cliquei aqui</button>
    </div>
  );
};

export default App;
