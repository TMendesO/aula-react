import React from 'react';
import Produto from './CSS-Modules/Produto';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    //Em baixo usa o react-bootstrap Modules
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500,00</Card.Title>
        <Card.Text>
          Notebook LG Gram, Intel Core i5-8250U, 8GB RAM, 256GB SSD, Tela Full
          HD 14", Windows 10 - 14Z980-G.BH51P1 - Cinza
        </Card.Text>
      </Card.Body>
    </Card>

    //Em baixo usa o bootstrap normal
    // <div className="card bg-dark text-white m-5" style={{ maxWidth: '18rem' }}>
    //   <h1 className="card-header">Notebook</h1>
    //   <div className="card-body">
    //     <h5 className="car-title">R$ 2500,00</h5>
    //     <p className="card-text">
    //       Notebook LG Gram, Intel Core i5-8250U, 8GB RAM, 256GB SSD, Tela Full
    //       HD 14", Windows 10 - 14Z980-G.BH51P1 - Cinza
    //     </p>
    //   </div>
    // </div>
  );
};

export default App;
