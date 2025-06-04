//Você recebe um array de inteiros (positivos ou negativos) e um inteiro alvo. Encontre dois números no array cuja soma seja igual ao alvo e retorne seus índices (ou valores). Se houver múltiplas soluções, você deve retornar todas as possíveis.

function twoSum(arr, alvo) {
    const resultados = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === alvo) {
                resultados.push([i, j]);
            }
        }
    }

    return resultados;
}

// Exemplo de uso
const numeros = [2, 7, 11, 15, -2, 9];
const alvo = 9;
console.log(twoSum(numeros, alvo)); // Saída esperada: [[0, 1], [4, 5]]
