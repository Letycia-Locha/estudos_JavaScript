// Inverter sem uso de metodos mágicos e com uso de while 
const prompt = require('prompt-sync')();

function inverterString(texto) {
  let invertida = "";
  let i = texto.length - 1; // Começa no último caractere

  while (i >= 0) {
    invertida += texto[i]; // Adiciona o caractere atual à string invertida
    i--;                   // Vai para o anterior
  }

  return invertida;
}

let entrada = prompt("Digite uma palavra ou frase: ");
console.log("Invertida:", inverterString(entrada));
