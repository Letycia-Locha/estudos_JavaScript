/*Diferenciar metodos mutantes de não mutantes*/
// NÃO mutante: gera novo array de itens disponíveis
const updatedCart = cart.filter(item => item.inStock);

// Mutante: limpa carrinho original (se performance = prioridade)
for (let i = cart.length - 1; i >= 0; i--) {
  if (!cart[i].inStock) cart.splice(i, 1);
}