const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", function(entrada) {
    const idade = parseInt(entrada, 10);

    if (idade < 0) {
        console.log("Idade inválida.");
    } else if (idade <= 12) {
        console.log("Você é uma criança.");
    } else if (idade <= 17) {
        console.log("Você é um adolescente.");
    } else if (idade <= 59) {
        console.log("Você é um adulto.");
    } else {
        console.log("Você é um idoso.");
    }

    rl.close();
});
