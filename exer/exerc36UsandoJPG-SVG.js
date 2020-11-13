import React from 'react';
import './App.css';
import retro from './img/retro.svg';
import PasseioSvg from './PasseiSvg';
//import { ReactComponent as Esporte } from './img/esporte.svg';

const App = () => {
  return (
    <div>
      <p className="icon"></p>
      <PasseioSvg color="#84e" />
      <img src={retro} alt="Bike retro" />
    </div>
  );
};

export default App;
