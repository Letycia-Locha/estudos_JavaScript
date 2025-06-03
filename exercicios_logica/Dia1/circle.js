// circle.js
'use strict';

const readline = require('readline');

// Cria uma interface de leitura no stdin e escrita no stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário pelo valor de r
rl.question('Digite o valor do raio (r): ', (answer) => {
  // Converte a string digitada para número de ponto ﬂutuante
  const r = parseFloat(answer.replace(',', '.')); // substitui vírgula por ponto, se houver

  // Validação básica: r deve ser um número válido e ≥ 0
  if (isNaN(r) || r < 0) {
    console.log('Entrada inválida! Informe um número válido (ex: 2.6).');
    rl.close();
    return;
  }

  // Declara PI e calcula área e perímetro
  const PI = Math.PI;
  const area = PI * r * r;
  const perimeter = 2 * PI * r;

  // Imprime resultados no console
  console.log(`\nResultados:`);
  console.log(`Área do círculo: ${area}`);
  console.log(`Perímetro (circunferência): ${perimeter}`);

  rl.close(); // Fecha a interface para o programa encerrar
});
