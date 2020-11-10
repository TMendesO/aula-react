import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  });
  const [itens, setItens] = React.useState('Teste');

  function handleClick() {
    setItens('Outro');
  }

  return (
    <div>
      <p>{itens}</p>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
