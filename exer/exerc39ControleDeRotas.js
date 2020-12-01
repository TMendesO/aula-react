import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../exer/Home';
import Sobre from '../exer/Sobre';
import Header from '../exer/Header';
import Footer from '../exer/Footer';
import Login from '../exer/Login';
import NaoEncontrada from '../exer/NaoEncontrada';
import ProdutosDinamico from '../exer/ProdutosDinamico';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<ProdutosDinamico />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
