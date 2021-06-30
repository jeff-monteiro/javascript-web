function verificarIdade(nomePessoa, anoDeNascimento) {
  
  
  var idade = 2018 - anoDeNascimento

  if(idade >= 18){
    return nomePessoa + " é maior de idade."
  }else{
    return nomePessoa + " tem menos de 18 anos."
  }
   
}
var nome = 'Joelma'
var nascimento = 2002
console.log(verificarIdade(nome, nascimento))