import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivros } from './index';

// Tratamento de solicitações
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      // Método DELETE: Captura o código fornecido na URL
      const { codigo } = req.query;
      if (!codigo || typeof codigo !== 'string') {
        res.status(400).json({ error: 'Parâmetro codigo inválido' });
        return;
      }
      // Exclusão do livro no vetor via método excluir de controleLivro
      controleLivros.excluir(Number(codigo));
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      // Método não permitido
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    // Exceção ocorrida no servidor
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
