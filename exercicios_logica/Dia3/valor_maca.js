// Programa que calcula o valor da compra de maçãs com desconto por quantidade

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quantas maçãs você deseja comprar? ", function(entrada) {
  const quantidade = parseInt(entrada);

  // Define o preço por maçã baseado na quantidade
  let precoUnitario;

  if (quantidade >= 12) {
    precoUnitario = 0.25; // desconto para 12 ou mais
  } else {
    precoUnitario = 0.30; // preço cheio
  }

  // Calcula o valor total
  const total = quantidade * precoUnitario;

  console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);

  rl.close();
});
