const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    // Verifica se os valores são números
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        return "Por favor, digite a data apenas com números";
    }
    // Checa se estão nos intervalos básicos
    if (dia < 1 || dia > 31) {
        return "Dia inválido";
    }
    if (mes < 1 || mes > 12) {
        return "Mês inválido";
    }
    if (ano < 1000 || ano > 9999) { // ano com 4 dígitos
        return "Ano inválido";
    }

    // Agora, valida a quantidade de dias em cada mês (sem bissexto por enquanto)
    const mesesCom30 = [4, 6, 9, 11];
    if (mesesCom30.includes(mes) && dia > 30) {
        return "Dia inválido para esse mês";
    }
    // Fevereiro
    if (mes === 2) {
        // Ano bissexto: divisível por 4 e (não divisível por 100 ou divisível por 400)
        let bissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
        let limiteFevereiro = bissexto ? 29 : 28;
        if (dia > limiteFevereiro) {
            return "Dia inválido para fevereiro";
        }
    }

    return true; // Se passou por tudo, a data é válida
}

// Entrada do usuário
let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mês: "));
let ano = Number(prompt("Digite o ano: "));

// Saída
console.log(ehDataValida(dia, mes, ano));
