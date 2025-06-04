const readline = require("readline");

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculadoraSimples(num1, operador, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Por favor, digite apenas numeros inteiros e válidos."
    }
    if (operador === "+") {
        return num1 + num2;
    } else if (operador === "-"){
        return num1 - num2;
    } else if (operador === "/") {
        if (num2 === 0) {
            return "Não é possível dividir por zero";
        }
        return num1/num2;
    }else if (operador === "*") {
        if (num2 || num1 === 0) {
            return "Todo número multiplicado por zero é igual a zero";
        }
        return num1*num2
    } else {
        return "Utilize um dos 4 operadores disponíveis"
    }
}

let num1 = parseInt(prompt('Digite o primeiro número:  '));
let operador = prompt("Digite a operação desejada ( =. -. *. /): ");
let num2 = parseInt(prompt("Digite o segundo número: "));

let resultado = calculadoraSimples(num1, operador, num2);
console.log(`Resultado: ${resultado}`);




