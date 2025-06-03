const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Escolha uma opção:");
console.log("1 - Dizer Olá");
console.log("2 - Mostrar a data atual");
console.log("3 - Sair");

rl.question("Digite o número da opção: ", function(opcao) {
  switch (opcao) {
    case "1":
      console.log("Olá, usuário!");
      break;
    case "2":
      console.log("Data atual:", new Date().toLocaleString());
      break;
    case "3":
      console.log("Encerrando o programa.");
      break;
    default:
      console.log("Opção inválida.");
  }

  rl.close();
});
