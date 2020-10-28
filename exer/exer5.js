import React from 'react';
import Form from './Form/Form';

/* const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
}; */

const App = () => {
  return (
    <div>
      <Form />
      {/*  <Titulo cor="red" texto="Meu Titulo 1">
        Isso é o Children
        <p>Teste Children</p>
      </Titulo>
      <Titulo cor="blue" texto="Thiago" />
      <Titulo cor="green" texto="Mendes" /> */}
    </div>
  );
};

export default App;
