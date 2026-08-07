const express = require("express");
const app = express();

const produtos = [
    { id: 1, nome: "Joao", preco: 200 },
    { id: 2, nome: "Polaco", preco: 120 },
    { id: 3, nome: "bolinha", preco: 100 },
    { id: 4, nome: "Fone de Ouvido", preco: 110 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});