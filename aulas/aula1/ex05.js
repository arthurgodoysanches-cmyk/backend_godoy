const inicio =1;
const fim = 9;

let pares = 0 ;
let impares = 0;

for(let i = inicio; i <= fim; i++) {
    if ( i % 2 === 0 ){
        pares++;
    }
    else {
        impares++;
    }
}

console.log (`Pares: ${pares}`);
console.log (`Impares: ${impares}`);