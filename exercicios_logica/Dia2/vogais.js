// vowelsAndConsonants_local.js
'use strict';

const readline = require('readline');

// Função auxiliar para identificar vogal (mesma lógica usada acima)
function isVogal(letra) {
  const base = letra
    .normalize('NFD')                // decompor letra acentuada
    .replace(/[\u0300-\u036f]/g, '') // remove diacríticos
    .toLowerCase();                  // minúsculo

  return ['a', 'e', 'i', 'o', 'u'].includes(base);
}

// 1) Interface readline para ler do console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2) Pergunta ao usuário pela string (que agora pode ter maiúsculas, minúsculas e acentos)
rl.question('Digite uma string (pode conter letras maiúsculas, minúsculas e acentos): ', (answer) => {
  const s = answer.trim();

  // 3) Imprime primeiro todas as vogais encontradas (mantendo o caractere original)
  for (let i = 0; i < s.length; i++) {
    const letra = s[i];
    if (isVogal(letra)) {
      console.log(letra);
    }
  }

  // 4) Em seguida, imprime todas as consoantes (qualquer letra que não seja vogal)
  //    Conferimos se é letra usando regex Unicode
  for (let i = 0; i < s.length; i++) {
    const letra = s[i];
    const ehLetra = /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(letra);
    if (ehLetra && !isVogal(letra)) {
      console.log(letra);
    }
  }

  rl.close();
});
