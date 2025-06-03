// Solicita um número do usuário (em ambiente Node ou navegador com prompt)
const numero = parseInt(prompt("Digite um número inteiro:"), 10);

// Verifica se é par ou ímpar usando if
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
