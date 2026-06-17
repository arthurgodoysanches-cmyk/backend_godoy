function calcular(a, b, operacao){
    return operacao(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(calcular(10, 5, somar));
console.log(calcular(10, 5, subtrair));
console.log(calcular(10, 5, multiplicar));

console.log(calcular(8, 2, (a, b) => a + b));
console.log(calcular(8, 2, (a, b) => a - b));
console.log(calcular(8, 2, (a, b) => a * b));