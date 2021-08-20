const escola = "Cod3r"

console.log(escola.charAt(4))//Função 'charAt' retorna o valor armazenado no índice indicado.
console.log(escola.charAt(5))//Função retorna vazio
console.log(escola.charCodeAt(3))//Retorna o valor do índice na forma da tabela Unicode
console.log(escola.indexOf('3'))//Função para saber em que índice o digito está no código(String)

console.log(escola.substring(1))//Função retorna a string a partir do índice 1 == letra 'o'
console.log(escola.substring(0, 3))//Função retorna a partir do índice 0 três caracteres.

console.log('Escola ' + escola + '!')
//console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))//Função que substitue um caractere por outro.

//Função separa a string tornando uma cadeia de caractere em Array(ou Coleção)
console.log('Maria, Pedro, Jefferson, João, Karoliny'.split(','))

