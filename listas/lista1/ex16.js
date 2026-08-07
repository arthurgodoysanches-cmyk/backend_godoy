const turma = [
    { nome: 'Vozinha', nota: 8 },
    { nome: 'Yamal', nota: 7 },
    { nome: 'Neymar', nota: 6 },
    { nome: 'Messi', nota: 7 },
    { nome: 'Jorginho', nota: 8 }
];

const turmaSituacao = turma.map(aluno => ({
    ...aluno,
    situacao: aluno.nota >= 7 ? "Aprovado" : 'Reprovado'
}));

const aprovados = turmaSituacao.filter(aluno => aluno.situacao === 'Aprovado');
const mediaGeral = turma.reduce((acum, aluno) => acum + aluno.nota, 0) / turma.length;

console.log(turmaSituacao);
console.log('Aprovados:', aprovados.length);
console.log('Média geral:', mediaGeral);