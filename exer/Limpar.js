import React from 'react';
import { UserContext } from './UserContext';

const Limpar = () => {
  const { limparDados } = React.useContext(UserContext);
  console.log(limparDados);
  return <button onClick={limparDados}>Limpar</button>;
};

export default Limpar;
