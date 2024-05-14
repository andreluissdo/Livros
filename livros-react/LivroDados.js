import React, { useState } from 'react';
import { ControleLivros } from '../src/controle/ControleLivros';
import { ControleEditora } from '../src/controle/ControleEditora';
import { useNavigate } from 'react-router-dom';
import { Livro } from '../src/modelo/Livro'; // Importe a classe Livro

const LivroDados = () => {
  // Instanciar controladores de livros e editoras
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  // Definir vetor de opções para as editoras
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  // Definir estados para as propriedades do livro
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  // Hook para navegação
  const navigate = useNavigate();

  // Método para tratar mudanças na seleção da editora
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  // Método para incluir um novo livro
  const incluir = (event) => {
    event.preventDefault();
    const autoresArray = autores.split('\n');
    const novoLivro = new Livro(0, codEditora, titulo, resumo, autoresArray); // Criar uma nova instância de Livro
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h2>Cadastro de Livro</h2>
      <form onSubmit={incluir}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
        </div>
        <div>
          <label>Resumo:</label>
          <input type="text" value={resumo} onChange={(event) => setResumo(event.target.value)} />
        </div>
        <div>
          <label>Autores:</label>
          <textarea value={autores} onChange={(event) => setAutores(event.target.value)} />
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <button type="submit">Incluir</button>
      </form>
    </main>
  );
}

export default LivroDados;
