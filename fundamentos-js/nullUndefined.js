let valor //Não inicializada
console.log(valor)
// console.log(valor2)//Não foi declarada

valor = null //Ausência de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {} // Objeto vazio
console.log(produto.preco)
console.log(produto)

produto.preco = 3.85
console.log(produto)