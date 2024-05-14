import { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { Livro } from '../classes/modelo/Livro';

const LivroDados: React.FC = () => {
  // Definir objeto ControleEditora
  const controleEditora = new ControleEditora();

  // Definir baseURL
  const baseURL = "http://localhost:3000/api/livros";

  // Função para incluir livro
  const incluirLivro = async (livro: Livro) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livro)
    });
    return response.ok;
  };

  // Estados
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<string>(''); // Alterado para string

  // Hook para navegação
  const navigate = useRouter().push;

  // Método para incluir livro
  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro = new Livro(0, parseInt(codEditora), titulo, resumo, autores.split('\n')); // Corrigido para atribuir codEditora como número
    const success = await incluirLivro(livro);
    if (success) {
      navigate('/LivroLista');
    }
  };

  // Opções para combo de editoras
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora.toString(),
    text: editora.nome
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro Dados</title>
        <meta name="description" content="Dados do Livro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main>
        <h1 className={styles.title}>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          <br />
          <label>Resumo:</label>
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} required />
          <br />
          <label>Autores (separados por linha):</label>
          <textarea value={autores} onChange={(e) => setAutores(e.target.value)} required />
          <br />
          <label>Editora:</label>
          <select value={codEditora} onChange={(e) => setCodEditora(e.target.value)}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
          <br />
          <button type="submit">Adicionar Livro</button>
        </form>
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

export default LivroDados;
