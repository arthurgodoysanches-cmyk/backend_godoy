const input = require('readline-sync');

let num = input.questionInt("Digite um numero para contagem: ");
for (let i = num; i >= 1; i--) {
    console.log(i);
}
 console.log("Fim!");