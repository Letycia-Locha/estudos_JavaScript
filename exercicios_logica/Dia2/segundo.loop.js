// segundo_loop.js
'use strict';

const readline = require('readline');

function getSecondLargest(nums) {
  let max = -Infinity;     // maior valor até agora
  let second = -Infinity;  // segundo maior distinto

  for (const x of nums) {
    if (x > max) {               // novo maior
      second = max;
      max = x;
    } else if (x < max && x > second) {
      // x é distinto de max e maior que o segundo
      second = x;
    }
  }
  return second;
}

// ----- Prompt interativo -----
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a lista de números (separados por espaço): ', (answer) => {
  const nums = answer.trim().split(/\s+/).map(Number);

  if (nums.length < 2) {
    console.log('É necessário pelo menos dois números distintos.');
  } else {
    console.log(getSecondLargest(nums));
  }
  rl.close();
});
