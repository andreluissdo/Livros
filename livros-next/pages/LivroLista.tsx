import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import styles from './styles.module.css';


const LivroLista: React.FC = () => {
  // Definir baseURL
  const baseURL = "http://localhost:3000/api/livros";

  // Função para obter livros
  const obter = async () => {
    console.log("Obtendo lista de livros...");
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log("Dados obtidos:", data);
    return data;
  };

  // Função para excluir livro
  const excluirLivro = async (codigo: number) => {
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return response.ok;
  };

  // Estados
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  // Carregar os livros ao montar o componente
  useEffect(() => {
    obter().then((data) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  // Método para excluir livro
  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false); // Forçar o redesenho da página
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro Lista</title>
        <meta name="description" content="Lista de Livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Editora</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        <a onClick={() => window.open("https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app")} className={styles.link} href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default LivroLista;
