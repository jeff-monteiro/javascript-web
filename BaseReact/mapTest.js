const data = [1,2,3,4,5,6,7,8,9]
const iteracao = data.map((teste, index) => 'Números ' + index + ' ' + teste)
if(iteracao.index % 1){
  console.log('Número Impar')
}else{
  console.log('Número Par')
}

console.log(iteracao)