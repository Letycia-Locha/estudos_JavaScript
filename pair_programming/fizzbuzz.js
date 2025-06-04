for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



const prompt = require('prompt-sync')();

function fizzBuzz(entrada) {
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return "FizzBuzz";
  } else if (entrada % 3 === 0) {
    return "Fizz";
  } else if (entrada % 5 === 0) {
    return "Buzz";
  } else {
    return entrada;
  }
}

let entrada = prompt("Digite um número inteiro: ");
let numero = parseInt(entrada);

if (isNaN(numero)) {
  console.log("Valor inválido.");
} else {
  // Chamando a função com a entrada do usuário
  console.log(fizzBuzz(numero));
}
