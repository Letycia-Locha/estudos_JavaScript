// ampulheta_matriz_soma.js

// Função que calcula a maior soma de uma ampulheta numa matriz 6x6
function hourglassSum(arr) {
    let maxSum = -63; // menor valor possível: -9 * 7

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let soma = 
                arr[i][j]   + arr[i][j+1]   + arr[i][j+2] +
                              arr[i+1][j+1] +
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

            if (soma > maxSum) {
                maxSum = soma;
            }
        }
    }

    return maxSum;
}

// Exemplo de matriz 6x6 (você pode modificar para testar outros casos)
const matriz = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

// Executa a função e imprime o resultado
const resultado = hourglassSum(matriz);
console.log("Maior soma de ampulheta:", resultado);
