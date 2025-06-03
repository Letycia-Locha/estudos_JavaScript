// segundo_valor.js
'use strict';

const readline = require('readline');

function achaoSegundoValor(nums) {
  // 1) Ordena em ordem crescente
  nums.sort((a, b) => a - b);

  // 2) Deduplica mantendo a ordem do sort - tira os repetidos
  const unique = [...new Set(nums)];

  // 3) Retorna o penúltimo (segundo maior distinto)
  return unique[unique.length - 2];
}

// ----- Prompt interativo -----
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a lista de números (separados por espaço): ', (answer) => {
  // Converte string → array de inteiros
  const nums = answer.trim().split(/\s+/).map(Number);

  if (nums.length < 2) {
    console.log('É necessário pelo menos dois números distintos.');
  } else {
    console.log(achaoSegundoValor(nums));
  }
  rl.close();
});
