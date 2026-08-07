const express = require('express');
const app = express();
app.use(express.json());

let jogadores = [
  { id: 1, nome: "Neymar", time: "Santos", posicao: "Atacante", idade: 32 },
  { id: 2, nome: "Messi", time: "Inter Miami", posicao: "Atacante", idade: 37 }
];
let proximoId = 3;

app.get('/jogadores', (req, res) => {
  res.json(jogadores);
});

app.get('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id == req.params.id);
  if (!jogador) return res.status(404).json({ erro: 'Jogador não encontrado' });
  res.json(jogador);
});

app.post('/jogadores', (req, res) => {
  const { nome, time, posicao, idade } = req.body;

  // ===== Exercício 1: Campos obrigatórios =====
  if (!nome || !time || !posicao || idade === undefined) {
    return res.status(400).json({ 
      erro: 'Campos obrigatórios: nome, time, posicao e idade' 
    });
  }

  if (isNaN(idade) || idade < 15 || idade > 50) {
    return res.status(400).json({ 
      erro: 'Idade deve ser um número entre 15 e 50' 
    });
  }

  const novo = {
    id: proximoId++,
    nome,
    time,
    posicao,
    idade: Number(idade)
  };

  jogadores.push(novo);
  res.status(201).json(novo);
});

app.put('/jogadores/:id', (req, res) => {
  const index = jogadores.findIndex(j => j.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: 'Jogador não encontrado' });

  jogadores[index] = { ...jogadores[index], ...req.body, id: jogadores[index].id };
  res.json(jogadores[index]);
});

app.delete('/jogadores/:id', (req, res) => {
  const index = jogadores.findIndex(j => j.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: 'Jogador não encontrado' });

  jogadores.splice(index, 1);
  res.json({ mensagem: 'Jogador removido' });
});

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});