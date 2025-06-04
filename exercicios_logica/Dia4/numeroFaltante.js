// Suponha que este array esteja com um número de 1 a 100 faltando
const numeros = [];

// Preenchemos o array com todos os números de 1 a 100, exceto um (ex: 73)
for (let i = 1; i <= 100; i++) {
    if (i !== 73) {
        numeros.push(i);
    }
}

// Calcula a soma esperada dos números de 1 a 100
const somaEsperada = (100 * (100 + 1)) / 2; // Fórmula da soma de PA

// Calcula a soma real dos valores presentes no array
let somaReal = 0;
for (let i = 0; i < numeros.length; i++) {
    somaReal += numeros[i];
}

// A diferença revela o número que falta
const numeroFaltando = somaEsperada - somaReal;

// Exibe o resultado
console.log("Número faltando:", numeroFaltando);
