import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';

// Instância exportável de ControleEditora
export const controleEditora = new ControleEditora();

// Tratamento de solicitações
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Método GET: Retorna o vetor de editoras no formato JSON
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      // Método não permitido
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    // Exceção ocorrida no servidor
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
