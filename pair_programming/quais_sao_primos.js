//O programa recebe um array e mostra quais numeros do conjunto são ou não primos
const prompt = require('prompt-sync')();

function ehPrimo(n){
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Receber entrada do usuário
let entrada = prompt("Digite apenas números inteiros positivos, separados por vírgula: ");

// Verificar se a entrada está no formato correto (apenas números e vírgulas)
if (!/^\d+(,\d+)*$/.test(entrada)) {
    console.log("Entrada inválida. Digite apenas números inteiros positivos separados por vírgula.");
    process.exit();
}

// Converter para array de números
let numeros = entrada.split(",").map(Number);

// Separar em primos e não primos
let primos = [];
let naoPrimos = [];

for (let num of numeros) {
    if (ehPrimo(num)) {
        primos.push(num);
    } else {
        naoPrimos.push(num);
    }
}

// Mostrar o resultado
console.log(`${primos.join(", ")} são primos`);
console.log(`${naoPrimos.join(", ")} não são primos`);