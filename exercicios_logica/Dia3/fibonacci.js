// Programa que gera os 10 primeiros números da sequência de Fibonacci

let a = 0; // primeiro número
let b = 1; // segundo número

console.log("Os 10 primeiros números da sequência de Fibonacci:");
for (let i = 1; i <= 10; i++) {
  console.log(a); // imprime o número atual
  const proximo = a + b; // calcula o próximo número
  a = b; // avança os valores
  b = proximo;
}
