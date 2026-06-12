const prompt = require('prompt-sync')();
let pessoas = [];

let quantidade = Number(prompt("Quantas pessoas deseja cadastrar?"));

for (let i = 0; i < quantidade; i++) {
    let nome = prompt("Digite o nome:");
    let idade = Number(prompt("Digite a idade:"));

    pessoas.push({
        nome: nome,
        idade: idade
    });
}

console.log("=== CADASTRO ===");

for (let pessoa of pessoas) {
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("----------------");
}