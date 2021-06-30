function verificarIdade(nomePessoa, anoDeNascimento) {
  
  var idade = 2021 - anoDeNascimento

  if(idade >= 18){
    return nomePessoa + " é maior de idade."
  }else{
    return nomePessoa + " tem menos de 18 anos."
  }

}
var nome = 'Joelma'
var nascimento = 2002
console.log(verificarIdade(nome, nascimento))//Utilizando função atribuindo variáveis e valores as variáveis.

console.log(verificarIdade("Cassiano", 1988))//Atribuindo valores implicitamente na função

nome = "John"
nascimento = 1978
var texto = verificarIdade(nome, nascimento)//Atribuindo a função a uma outra variável.
console.log(texto)