// Lista de números inteiros (pode ser substituída por entrada do usuário se desejar)
const numeros = [7, 3, 9, 0, 4];

// Validação básica: garantir que a lista não esteja vazia
if (numeros.length === 0) {
    console.log("A lista está vazia.");
    process.exit();
}

// Inicializamos as variáveis 'maior' e 'menor' com o primeiro valor da lista
let maior = numeros[0];
let menor = numeros[0];

// Percorre todos os elementos da lista
for (let i = 1; i < numeros.length; i++) {
    const atual = numeros[i];

    // Se o valor atual for maior que o armazenado em 'maior', atualiza
    if (atual > maior) {
        maior = atual;
    }

    // Se o valor atual for menor que o armazenado em 'menor', atualiza
    if (atual < menor) {
        menor = atual;
    }
}

// Imprime os resultados
console.log("Maior número encontrado:", maior);
console.log("Menor número encontrado:", menor);
