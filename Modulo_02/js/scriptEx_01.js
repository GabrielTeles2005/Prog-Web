function calcular() {
    
  let nome = document.getElementById("nome").value;
  let precoProduto = Number(document.getElementById("preco").value);
  let percentualDesconto = Number(document.getElementById("desconto").value);

  let valorDesconto = (precoProduto * percentualDesconto) / 100;
  let precoFinal = precoProduto - valorDesconto;

  let precoMaiorQue100 = precoProduto > 100;

  let descontoValido = percentualDesconto >= 0 && percentualDesconto <= 100;

  let resultado = `
    <p>Olá, ${nome}! O produto custa R$ ${precoProduto}</p>
    <p>Desconto de ${percentualDesconto}%: R$ ${valorDesconto}</p>
    <p>Preço final: R$ ${precoFinal}</p>
    <p>Preço acima de R$ 100? ${precoMaiorQue100}</p>
    <p>Desconto válido? ${descontoValido}</p>
  `;

  console.log(resultado);

  document.getElementById("resultado").innerHTML = resultado;
}