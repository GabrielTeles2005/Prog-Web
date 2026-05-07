const container = document.getElementById("container");

let produtos = [
    { nome: "Celular", preco: 1500, categoria: "eletronico" },
    { nome: "Notebook", preco: 3500, categoria: "eletronico" },
    { nome: "Cadeira", preco: 300, categoria: "movel" },
    { nome: "Mesa", preco: 500, categoria: "movel" },
    { nome: "Fone", preco: 200, categoria: "eletronico" }
];

function criarCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.dataset.categoria = produto.categoria;

    card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <p>${produto.categoria}</p>
    `;

    container.appendChild(card);
}

function carregarProdutos() {
    container.innerHTML = "";
    produtos.forEach(produto => criarCard(produto));
}

function filtrarEletronicos() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (card.dataset.categoria !== "eletronico") {
            card.classList.toggle("hidden");
        }
    });
}

function limparCards() {
    container.innerHTML = "";
}

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;

    if (!nome || !preco || !categoria) return;

    const novoProduto = { nome, preco, categoria };
    produtos.push(novoProduto);

    criarCard(novoProduto);

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
}

carregarProdutos();