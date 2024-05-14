import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '../editoras/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method === 'GET') {
        const { codEditora } = req.query;
        if (!codEditora || typeof codEditora !== 'string') {
          res.status(400).json({ error: 'Parâmetro codEditora inválido' });
          return;
        }
        const editoraId = parseInt(codEditora, 10);
        const nomeEditora = controleEditora.getNomeEditora(editoraId);
        if (!nomeEditora) {
          res.status(404).json({ error: 'Editora não encontrada' });
          return;
        }
        res.status(200).json({ nome: nomeEditora });
      } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Método ${req.method} não permitido`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
}