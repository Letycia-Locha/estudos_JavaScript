// Programa que lê 5 números e calcula a soma total

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let contador = 0;

// Função recursiva para ler um número por vez
function pedirNumero() {
  if (contador < 5) {
    rl.question(`Digite o ${contador + 1}º número: `, function(entrada) {
      const numero = parseFloat(entrada);
      soma += numero;
      contador++;
      pedirNumero(); // chama novamente até completar 5
    });
  } else {
    console.log(`Soma total: ${soma}`);
    rl.close();
  }
}

pedirNumero();
