// Programa que mostra a tabuada de um número informado

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para ver sua tabuada: ", function(entrada) {
  const numero = parseInt(entrada);

  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  rl.close();
});
