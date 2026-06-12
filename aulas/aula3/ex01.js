const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do aluno:");
let idade = Number(prompt("Digite a idade:"));
let turma = prompt("Digite a turma:");

console.log("=== FICHA DO ALUNO ===");
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Turma: " + turma);