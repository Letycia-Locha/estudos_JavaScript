const prompt = require('prompt-sync')();

const segredo = Math.floor(Math.random() * 100) + 1; // número entre 1 e 100
let tentativas = 0;
let acertou = false;

console.log("Adivinhe o número secreto (entre 1 e 100)!");

while (!acertou) {
  let palpite = Number(prompt("Seu palpite: "));
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Por favor, digite um número válido entre 1 e 100.");
    continue;
  }
  if (palpite < segredo) {
    console.log("Mais alto!");
  } else if (palpite > segredo) {
    console.log("Mais baixo!");
  } else {
    acertou = true;
    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
  }
}