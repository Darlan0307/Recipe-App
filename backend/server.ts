import express from 'express';
import { PrismaClient } from '@prisma/client';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const prisma = new PrismaClient();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post('/api/receitas', async (req, res) => {
    const { titulo, descricao, ingredientes, preparo } = req.body;
    const receita = await prisma.receita.create({
      data: { titulo, descricao, ingredientes, preparo },
    });
    res.json(receita);
  });

  server.get('/api/receitas', async (req, res) => {
    const receitas = await prisma.receita.findMany();
    res.json(receitas);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
