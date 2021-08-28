//Função sem mensagemRetorno
function imprimirSoma(num1, num2){
  console.log(num1 + num2)
}
imprimirSoma(2, 3)
imprimirSoma(2, 10, 8, 4, 5, 7) //Utiliza somente os dois primeiros valores e ignora o resto
imprimirSoma()//Vazia retorna NaN

//Função com retorno
function soma(a, b = 0){ //No parâmetro b foi feito a atribuição de um valor localmente
  return a + b
}
console.log(soma(5, 9))
console.log(soma(3))