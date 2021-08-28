//Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
  console.log(a + b)
}
imprimirSoma(2, 6)

//Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
  return a + b
}
console.log(soma(3, 8))

//Retorno implícito === return
const subtracao = (a, b) => a - b
console.log(subtracao(9, 4))