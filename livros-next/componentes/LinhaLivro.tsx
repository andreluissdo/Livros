import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

// Inicializar uma instância de ControleEditora
const controleEditora = new ControleEditora();

// Definir a interface LinhaLivroProps
interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

// Definir o componente exportável LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
      <td>{livro.codigo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
