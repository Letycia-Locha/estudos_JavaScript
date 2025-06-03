// factorial_prompt.js
'use strict';

const readline = require('readline');

// ---------- Funções utilitárias ----------
function fatorialIterativo(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function factorial(n) {
  if (Number.isInteger(n)) {
    if (n < 0) throw new Error('Fatorial indefinido para inteiros negativos.');
    return fatorialIterativo(n);
  }
  if (gamma) return gamma(n + 1);      // extensão via Γ
  throw new Error('Número não inteiro e módulo "gamma" não instalado.');
}

// ---------- Sempre usa prompt ----------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número que quer calcular o fatorial: ', answer => {
  try {
    const num = Number(answer.replace(',', '.')); // permite vírgula ou ponto
    const res = factorial(num);
    console.log(`Resultado: ${res}`);
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  }
  rl.close();
});
