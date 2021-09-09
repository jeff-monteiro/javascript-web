const saudacao = 'Opa' // contexto léxico 1

exec = () => { // contexto léxico 2
  const saudacao = 'Falaaa tu'
  return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Jefferson',
  idade: 27,
  altura: 1.73,
  endereco: {
    logradouro: 'Rua moacir machado',
    numero: 35
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)