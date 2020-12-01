import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loadin, setLoadin] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoadin(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um Erro ocorreu');
      } finally {
        setLoadin(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loadin) return <div className="loading"></div>;
  if (produto === null) return null;
  if (error) return <p>{error}</p>;
  return (
    <section className={`${styles.produto}  animeLeft`}>
      <Head
        title={`Renek | ${produto.nome}`}
        description={`Renek | Esse é o  ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
