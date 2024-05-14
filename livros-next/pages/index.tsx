import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from './styles.module.css'; // Importe o arquivo de estilos

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Descrição da página inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}> {/* Use as classes importadas */}
        <h1 className={styles.title}>Página Inicial</h1> {/* Use as classes importadas */}
      </main>

      <footer className={styles.footer}>
        <span onClick={() => window.open("https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app")} className={styles.link} target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
