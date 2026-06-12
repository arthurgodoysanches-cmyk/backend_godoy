const prompt = require('prompt-sync')();
let produtos = [];

for (let i = 0; i < 3; i++) {
    let produto = prompt("Digite o nome do produto:");
    produtos.push(produto);
}

console.log("=== LISTA DE PRODUTOS ===");

for (let produto of produtos) {
    console.log(produto);
}