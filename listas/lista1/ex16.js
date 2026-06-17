const turma = [
    { nome: 'Arthur', nota: 8 },
    { nome: 'Bruno', nota: 7 },
    { nome: 'Mateus', nota: 6 },
    { nome: 'João ', nota: 7 },
    { nome: 'Emanuel', nota: 8 }
];

const turmaSituacao = turma.map(aluno => ({
    ...aluno,
    situacao: aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'
}));

const aprovados = turmaSituacao.filter(aluno => aluno.situacao === 'Aprovado');
const mediaGeral = turma.reduce((acum, aluno) => acum + aluno.nota, 0) / turma.length;

console.log(turmaSituacao);
console.log('Aprovados:', aprovados.length);
console.log('Média geral:', mediaGeral);