import React from 'react';
import Input from './Form/Input';
import Button from './Form/Button';
import useForm from './Hooks/useFormRegex';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validade() && email.validade() && nome.validade()) {
      console.log('Enviou');
    } else {
      console.log('Não enviado');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <br />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <br />
      <Input
        label="CEP"
        id="cep"
        type="text"
        {...cep}
        placeholder="00000-000"
      />
      <br />
      <Input
        label="E-mail"
        id="email"
        type="email"
        placeholder="exemplo@exemplo.com"
        {...email}
      />
      <br />

      <Button name="Enviar" />
    </form>
  );
};

export default App;
