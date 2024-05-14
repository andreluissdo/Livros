import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

// Instância exportável de ControleLivros
export const controleLivros = new ControleLivros();

// Tratamento de solicitações
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Método GET: Retorna o vetor de livros no formato JSON
      const livros = controleLivros.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      // Método POST: Captura os dados do livro fornecido no corpo da requisição
      const novoLivro = req.body;
      // Inclusão no vetor de livros via método incluir de controleLivros
      controleLivros.incluir(novoLivro);
      res.status(200).json({ message: 'Livro adicionado com sucesso' });
    } else {
      // Método não permitido
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    // Exceção ocorrida no servidor
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
