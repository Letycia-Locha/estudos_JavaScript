const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0, contador = 0;

const ler = () => {
  rl.question("Digite um número decimal (ou 0 para encerrar): ", entrada => {
    const n = parseFloat(entrada);

    if (n === 0) {
      const msg = contador === 0
        ? "Nenhum número válido foi digitado."
        : `Média aritmética: ${(soma / contador).toFixed(2)}`;
      console.log(msg);
      rl.close();
    } else {
      soma += n;
      contador++;
      ler();
    }
  });
};

ler();
