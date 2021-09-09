console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}//Função Vazia
  console.log(typeof Cliente)
  console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto) 

calcularSoma = () => {
  let a = 15
  let b = 10
  let resultado = a + b
  console.log(resultado)
  }
  calcularSoma()