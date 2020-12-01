import React from 'react';
import {
  useParams,
  useLocation,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import { ProdutoCustomizacao } from './ProdutoCustomizacao';
import ProdutoDescricao from './ProdutoDescricao';

const ProdutosDinamico = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        {' | '}
        <NavLink to="avaliacao">Avaliação</NavLink>
        {' | '}
        <NavLink to="customizado">Customização</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizacao />} />
      </Routes>
    </div>
  );
};

export default ProdutosDinamico;
