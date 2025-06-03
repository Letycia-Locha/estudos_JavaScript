// Programa que lê dois valores diferentes e exibe em ordem crescente

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro valor: ", function(valor1Str) {
  rl.question("Digite o segundo valor (diferente do primeiro): ", function(valor2Str) {
    const valor1 = parseFloat(valor1Str);
    const valor2 = parseFloat(valor2Str);

    if (valor1 === valor2) {
      console.log("Os valores devem ser diferentes!");
    } else if (valor1 < valor2) {
      console.log(`Ordem crescente: ${valor1}, ${valor2}`);
    } else {
      console.log(`Ordem crescente: ${valor2}, ${valor1}`);
    }

    rl.close();
  });
});
