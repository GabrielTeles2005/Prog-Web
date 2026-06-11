const { soma, multiplicacao } = require('./utils');
const fs = require('fs');

const resultadoSoma = soma(10, 5);
const resultadoMultiplicacao = multiplicacao(10, 5);

const conteudo = `
Resultado da Soma: ${resultadoSoma}
Resultado da Multiplicação: ${resultadoMultiplicacao}
`;

fs.writeFileSync('resultado.txt', conteudo);

console.log('Arquivo resultado.txt criado com sucesso!');