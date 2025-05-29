const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

function addTask() {
    const task = input.value.trim(); //constante que recebe o input
    
  if (task !== "") { //garante que o valor da task não é vazia e que é uma string
    const li = document.createElement ("li"); //cria um novo item de lista
    li.textContent = task; //coloca o que foi escrito no input dentro do item novo

    li.addEventListener("click", () => { //adiciona a função de remover um item da lista
        li.remove();
    });

    list.appendChild(li); //adiciona o novo item na lista e mostra na tela
    input.value = ""; //limpa a caixa de texto para receber novos inputs
  }
}

button.addEventListener("click", addTask);

