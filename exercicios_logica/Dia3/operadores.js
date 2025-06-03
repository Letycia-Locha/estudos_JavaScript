//Operador OU lógico - ou de disjunção
const a = true;
const b = false;

console.log(a || b); // true

//também usado para valores alternativos
const nome = "" || "Anônimo";  // → "Anônimo"
//Aqui, como "" é um valor falsy, o JS usa o valor da direita como fallback.

//Situação comum
if (idade < 18 || possuiAutorizacao) {
  console.log("Entrada permitida");
}
/*A entrada é permitida se a pessoa for menor de idade ou tiver autorização.*/


//Operador E logico - ou de conjunção
/*É o operador lógico "E".
Ele só retorna true se as duas condições forem verdadeiras.*/

let maiorDeIdade = true;
let possuiDocumento = true;

if (maiorDeIdade && possuiDocumento) {
  console.log("Pode entrar.");
}

/*Nesse caso, a pessoa só pode entrar se as duas condições forem verdadeiras.*/

//Exemplo com uma condição falsa
let maiorDeIdade = true;
let possuiDocumento = false;

console.log(maiorDeIdade && possuiDocumento); // false

/*true && false = false*/

//Também pode ser usado para curto-circuito
const nome = "Letycia";

nome && console.log("Usuário logado");

/*Se nome for truthy, ele executa o console.log.
Se for "" (falsy), ele ignora.*/


