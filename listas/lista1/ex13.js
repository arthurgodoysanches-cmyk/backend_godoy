function range(inicio, fim) {
    let resultado = [];
    for (let i = inicio; i <= fim; i++) {
        resultado.push(i);
    }
    return resultado;
}

function soma(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(soma(range(1, 10)));