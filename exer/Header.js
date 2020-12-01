import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './HeaderNavLink.css';
//import { Link } from 'react-router-dom'; <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>

const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);
  return (
    <header>
      <NavLink to="/" end>
        Home
      </NavLink>{' '}
      | <NavLink to="sobre">Sobre</NavLink> |{' '}
      <NavLink to="login">Login</NavLink>
    </header>
  );
};

export default Header;
