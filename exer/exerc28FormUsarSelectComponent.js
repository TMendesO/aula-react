import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Button from './Form/Button';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  return (
    <form>
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
