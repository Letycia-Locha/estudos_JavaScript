function inverterString(str) {
    // Validação: garantir que a entrada seja uma string
    if (typeof str !== "string") {
        return "Erro: A entrada deve ser uma string.";
    }

    let invertida = "";

    // Percorre a string do último caractere até o primeiro
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i]; // adiciona cada caractere à nova string
    }

    return invertida;
}

// Exemplos de uso
console.log(inverterString("javascript")); // Saída esperada: "tpircsavaj"
console.log(inverterString("12345"));      // Saída esperada: "54321"
console.log(inverterString(12345));        // Saída esperada: "Erro: A entrada deve ser uma string."
