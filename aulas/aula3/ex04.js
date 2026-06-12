const prompt = require('prompt-sync')();
let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros.push(Number(prompt("Digite um número:")));
}

let dobro = numeros.map(numero => numero * 2);

console.log("Números digitados:");
console.log(numeros);

console.log("Dobro dos números:");
console.log(dobro);