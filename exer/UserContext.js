import React from 'react';

export const UserContext = React.createContext();

export const ContextStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <UserContext.Provider value={{ dados, limparDados }}>
      {children}
    </UserContext.Provider>
  );
};
