const prompt = require('prompt-sync')();

function verificaPalindromo() {
 
let palavra = prompt('Digite uma frase ou palavra: ');

    if(/\d/.test(palavra)) {
    console.log("Digite apenas letras ou frases - sem números");
    return;
    } 

    const limpa = palavra.toLowerCase().replace(/\s/g, '');

    if (limpa.split("").reverse().join("") === limpa) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}
verificaPalindromo();