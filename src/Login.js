import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    console.log('Login');
    navigate('/');
  }
  return (
    <div>
      {' '}
      <h1>Login</h1>
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
