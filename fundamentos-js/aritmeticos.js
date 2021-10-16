const [a, x, b, y] = [10, 8, 6, 2]

const soma = a + x + b + y
const subt = a - y
const mult = x * b
const div = x / y
const modulo = a % 2

//Apenas executando uma função de teste
teste = () => {
  if(modulo == 0){
    console.log('número par')
  }
}
teste()
console.log(soma, subt, mult, div, modulo)