import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Executou');
  }, []);
  React.useEffect(() => {
    document.title = 'Total: ' + contar;
    console.log('Executou ' + contar);
  }, [contar]);
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
