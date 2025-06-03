// Programa que calcula a média de números decimais até o usuário digitar 0

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let contador = 0;

function lerNumero() {
  rl.question("Digite um número decimal (ou 0 para encerrar): ", function(entrada) {
    const numero = parseFloat(entrada);

    if (numero === 0) {
      if (contador === 0) {
        console.log("Nenhum número válido foi digitado.");
      } else {
        const media = soma / contador;
        console.log(`Média aritmética: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      soma += numero;
      contador++;
      lerNumero(); // chama novamente
    }
  });
}

lerNumero();
