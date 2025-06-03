/*Estudando estruturas de repetição*/
//For - melhor quando o contador é claro (arrays, repetições fixas).

// for — 10 cupons
for (let i = 0; i < 10; i++) issueCoupon(i);

// while — até o usuário digitar vazio
//condição pode mudar de forma imprevisível e pode nunca ser verdadeira desde o início.
let line = prompt('Comando:');
while (line !== '') {
  execute(line);
  line = prompt('Comando:');
}

// do…while — mostra menu sempre pelo menos uma vez
// ideal quando a lógica exige “rodar uma vez antes da checagem”.
let again;
do {
  showMenu();
  again = confirm('Deseja outra operação?');
} while (again);
