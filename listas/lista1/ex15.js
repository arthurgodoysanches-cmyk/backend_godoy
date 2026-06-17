const produtos = [
    { id: 1, nome: 'Teclado', preco: 99.90 },
    { id: 2, nome: 'Mouse', preco: 50.00 },
    { id: 3, nome: 'Monitor', preco: 399.90},
    { id: 4, nome: 'Teclado Mecânico', preco: 110.90 },
    { id: 5, nome: 'Webcam', preco: 129.90 }
];

const produtoId3 = produtos.find(p => p.id === 3);
const caros = produtos.filter(p => p.preco > 100);
const nomes = produtos.map(p => p.nome);

console.log(produtoId3);
console.log(caros);
console.log(nomes);
produtos.forEach(p => console.log(`${p.id} - ${p.nome}: R$ ${p.preco}`));