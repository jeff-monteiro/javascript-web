const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//Pergunta para o meu interpretador qual o tipo da variável.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
if(media > 7){
  console.log("Aluno Aprovado!")
}else{
  console.log("Aluno Reprovado!")
}

console.log(media.toFixed(2))
console.log(media.toString())
console.log(typeof media)//Informa o tipo de dado armazenado na variável
console.log(typeof Number)



