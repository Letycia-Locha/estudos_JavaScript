//boa abordagem para códigos mais simples - verificação sequencial com flag booleana

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));

if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
} else {
    let primo = true;

    if (numero <= 1) {
        primo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break; // já sabemos que não é primo, então saímos do loop
            }
        }
    }

    if (primo) {
        console.log(`${numero} é primo.`);
    } else {
        console.log(`${numero} não é primo.`);
    }
}


//