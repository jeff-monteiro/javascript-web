const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0, 1])//Imprime somente o valor da posição 1
console.log(valores[0], valores[2])//Imprime os valores armazenados nas posições 0 e 2

valores[4] = 10//Adiciona uma nova posição dentro do meu array
console.log(valores[4])
console.log(valores.length)//Retorna quantos elementos meu array possui

//Adiciona novos elementos no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Para remover o último elemento do meu array
console.log(valores.pop())
//Outra forma de remover elementos do meu array
delete valores[0]
console.log(valores)

//Arrays em JS é um objeto
console.log(typeof valores)