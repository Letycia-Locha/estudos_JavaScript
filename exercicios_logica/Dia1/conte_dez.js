// Programa que lê um número inteiro e o escreve na tela 10 vezes

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", function(entrada) {
  const numero = parseInt(entrada);

  console.log(`Exibindo o número ${numero} dez vezes:`);

  // Loop para repetir 10 vezes
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}º: ${numero}`);
  }

  rl.close();
});
