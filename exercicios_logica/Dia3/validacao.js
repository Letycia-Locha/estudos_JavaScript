//validação de email
const email = "usuario@exemplo.com";
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailValido = regexEmail.test(email);

//validação de nome
const nome = "Letycia Silva";
const nomeValido = nome.trim().split(" ").length >= 2;

//validação de CPF
const cpf = "123.456.789-09";
const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const cpfValido = regexCPF.test(cpf);

//validação de endereço residencial
const endereco = "Rua das Flores, 123";
const enderecoValido = endereco.trim().length >= 10;

//validação de telefone
const telefone = "(35) 91234-5678";
const regexTelefone = /^\(\d{2}\)\s9?\d{4}\-\d{4}$/;
const telefoneValido = regexTelefone.test(telefone);
