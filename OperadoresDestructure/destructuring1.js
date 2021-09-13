const pessoa = {
  nome: 'Karoliny',
  idade: 22,
  endereco: {
    logradouro: 'Rua Livreiro',
    numero: 40
  }
}
// console.log(pessoa.endereco.logradouro)
const { nome, idade } = pessoa // Destructuring#01
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Alterando o nome da variável
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa //Caso queira remover de dentro de um objeto que nunca existiu
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa //Acessando atributos aninhados
console.log(logradouro, numero, cep)