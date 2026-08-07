const express = require('express');
const app = express();
app.use(express.json());

let jogadores = [
  { id: 1, nome: "Neymar", time: "Santos", posicao: "Atacante" },
  { id: 2, nome: "Messi", time: "Inter Miami", posicao: "Atacante" }
];
let proximoId = 3;

app.get('/jogadores', (req, res) => {
  res.json(jogadores);
});

app.get('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);
  if (!jogador) return res.status(404).json({ erro: 'Não encontrado' });
  res.json(jogador);
});

app.post('/jogadores', (req, res) => {
  const novo = {
    id: proximoId++,
    nome: req.body.nome,
    time: req.body.time,
    posicao: req.body.posicao
  };
  jogadores.push(novo);
  res.status(201).json(novo);
});

app.put('/jogadores/:id', (req, res) => {
  const index = jogadores.findIndex(j => j.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: 'Não encontrado' });

  jogadores[index] = { ...jogadores[index], ...req.body, id: jogadores[index].id };
  res.json(jogadores[index]);
});

app.delete('/jogadores/:id', (req, res) => {
  const index = jogadores.findIndex(j => j.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: 'Não encontrado' });

  jogadores.splice(index, 1);
  res.json({ mensagem: 'Removido' });
});

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});