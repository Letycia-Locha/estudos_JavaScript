const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso (em kg): ", function(pesoStr) {
  rl.question("Digite sua altura (em metros): ", function(alturaStr) {
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);
    const imc = peso / (altura * altura);

    console.log("Seu IMC é:", imc.toFixed(2));

    if (imc < 18.5) {
      console.log("Baixo peso");
    } else if (imc < 25) {
      console.log("Peso normal");
    } else if (imc < 30) {
      console.log("Sobrepeso");
    } else {
      console.log("Obesidade");
    }

    rl.close();
  });
});
