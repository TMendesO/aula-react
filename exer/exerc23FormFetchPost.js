import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
//fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//method: 'POST',
// headers: {
// 'Content-Type': 'application/json',
//},
// form é o objeto com os dados do formulário
// body: JSON.stringify(form),
//});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFilds = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];
const App = () => {
  const [form, setForm] = React.useState(
    formFilds.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  const [r, setResponse] = React.useState(null);
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((r) => {
      setResponse(r);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFilds.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {r && r.ok && <p>Formulario enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
