// Converter para array de números
let num = entrada.split(",").map(Number);

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

/*Opção dois*/
function ehPrimo(valor) {
  if (valor <= 1) return false;
  for (let divisor = 2; divisor < valor; divisor++) {
    if (valor % divisor === 0) return false;
  }
  return true;
}

let numeros = [2, 3, 4, 5, 10, 11, 15, 17, 20, 23];
let classifica = [];

for (let indice = 0; indice < numeros.length; indice++) {
  if (ehPrimo(numeros[indice])) {
    primos.push(numeros[indice]);
  }
}
console.log("Números primos encontrados:", primos);
