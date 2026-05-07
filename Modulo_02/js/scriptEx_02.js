const alunos = [
  { nome: "Gabriel", nota1: 7, nota2: 8 },
  { nome: "Ana", nota1: 5, nota2: 6 },
  { nome: "Carlos", nota1: 4, nota2: 3 },
  { nome: "Julia", nota1: 9, nota2: 10 },
  { nome: "Marcos", nota1: 6, nota2: 7 }
];

function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

const alunosComMedia = alunos.map(aluno => ({
  ...aluno,
  media: calcularMedia(aluno.nota1, aluno.nota2)
}));

const aprovados = alunosComMedia.filter(a => a.media >= 6);
const reprovados = alunosComMedia.filter(a => a.media < 6);

const mediaGeral = alunosComMedia.reduce((acc, a) => acc + a.media, 0) / alunosComMedia.length;

const ranking = [...alunosComMedia].sort((a, b) => b.media - a.media);

function criarCard(aluno, classe = "") {
  return `
    <div class="card ${classe}">
      <p><strong>${aluno.nome}</strong></p>
      <p>Média: ${aluno.media.toFixed(2)}</p>
    </div>
  `;
}

document.getElementById("lista").innerHTML = `
  <h2>Todos os Alunos</h2>
  ${alunosComMedia.map(a => criarCard(a)).join("")}
`;

document.getElementById("aprovados").innerHTML = `
  <h2>✅ Aprovados</h2>
  ${aprovados.map(a => criarCard(a, "aprovado")).join("")}
`;

document.getElementById("reprovados").innerHTML = `
  <h2>❌ Reprovados</h2>
  ${reprovados.map(a => criarCard(a, "reprovado")).join("")}
`;

document.getElementById("media").innerHTML = `
  <h2>📊 Média Geral</h2>
  <p>${mediaGeral.toFixed(2)}</p>
`;

document.getElementById("ranking").innerHTML = `
  <h2>🏆 Ranking</h2>
  ${ranking.map((a, i) => `
    <div class="card">
      ${i + 1}º - ${a.nome} (${a.media.toFixed(2)})
    </div>
  `).join("")}
`;