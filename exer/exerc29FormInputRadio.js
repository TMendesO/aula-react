import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Button from './Form/Button';
import Radio from './Form/Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Verde');
  const [fruta, setFruta] = React.useState('Maça');
  return (
    <form>
      <h2>Cores</h2>
      <Radio
        options={['vermelho', 'Azul', 'Verde']}
        value={cor}
        setValue={setCor}
      />
      <h2>Frutas</h2>
      <Radio
        options={['Maça', 'Pera', 'Banana']}
        value={fruta}
        setValue={setFruta}
      />

      <Select
        options={['Smartphone', 'Notebook', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input
        id="email"
        label="E-mail"
        value={email}
        setValue={setEmail}
        required
      />

      <Button name="Enviar" />
    </form>
  );
};

export default App;
