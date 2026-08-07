const express = require("express");
const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 100 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
    let id = Number(req.params.id);

    let produto = produtos.find(function(p) {
        return p.id === id;
    });

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
});

app.post("/produtos", (req, res) => {
    let produto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    };

    produtos.push(produto);

    res.status(201).json(produto);
});

app.put("/produtos/:id", (req, res) => {
    let id = Number(req.params.id);

    let produto = produtos.find(function(p) {
        return p.id === id;
    });

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
    let id = Number(req.params.id);

    let indice = produtos.findIndex(function(p) {
        return p.id === id;
    });

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(indice, 1);

    res.json({
        mensagem: "Produto removido com sucesso"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});