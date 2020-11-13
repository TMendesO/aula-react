import React from 'react';
import useFetch from './useFetch';
import useCustonHook1 from './useCustonHook1';

const App = () => {
  const [produto, setProduto] = useCustonHook1('produto', '');
  const { request, data, loading, erro } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://api.spotify.com/v1/playlists/{37i9dQZF1DX7qK8ma5wgG1}',
      );
      console.log(response, json);
    }

    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  if (erro) return <p>{erro}</p>;
  if (loading)
    return <p style={{ color: 'red', fontSize: '28px' }}>Carregando....</p>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Srmatphone</button>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
