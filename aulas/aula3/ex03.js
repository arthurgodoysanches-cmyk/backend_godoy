const prompt = require('prompt-sync')();
let frutas = ["maçã", "banana", "laranja", "uva", "morango"];

let busca = prompt("Digite uma fruta para procurar:");

if (frutas.includes(busca)) {
    console.log("Fruta encontrada!");
} else {
    console.log("Fruta não encontrada!");
}