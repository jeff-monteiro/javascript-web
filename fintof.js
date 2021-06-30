function verificarMaiorIdade(nomePessoa, idadePessoa){
  if(idadePessoa >= 18){
    console.log(nomePessoa + ' Maior de idade.')
  }else{
    console.log(nomePessoa + ' Menor de idade.')
  } 
}

function verificarIdade(nomePessoa, anoDeNascimento){
  var idade = 2021 - anoDeNascimento
  var mensagemRetorno = verificarMaiorIdade(nomePessoa, idade)
  console.log(mensagemRetorno)
}
var nome = 'Jefferson'
var nascimento = 1995
verificarIdade(nome, nascimento)
  

