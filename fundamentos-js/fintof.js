function verificarMaiorIdade(nomePessoa, idadePessoa){
  if(idadePessoa >= 18){
    console.log(nomePessoa + ' Maior de idade.')
  }else{
    console.log(nomePessoa + ' Menor de idade.')
  } 
}

function verificarIdade(nomePessoa, anoDeNascimento){//Utilizando uma função pra chamar outra função
  var idade = 2021 - anoDeNascimento
  var mensagemRetorno = verificarMaiorIdade(nomePessoa, idade)
}
var nome = 'Jefferson'
var nascimento = 1995
verificarIdade(nome, nascimento)

verificarIdade("Cassiano", 1975)

nome = "John"
nascimento = 1978
verificarIdade(nome, nascimento)
  

