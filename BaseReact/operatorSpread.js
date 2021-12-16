//const livros1 = [ 'CSS3' , 'Javascript' , 'PHP' ]
//const livros2 = [ 'HTML' , 'React' ]
const precos = [70, 30, 90, 100, 10]

//let livros = [...livros1, ...livros2]//Utilizando operador SPREAD.
let precoMaximo1 = Math.max(...precos)//Atribuindo um array como parâmetro ao operador SPREAD.
let precoMinimo1 = Math.min(...precos)

//console.log([livros])
console.log(precoMaximo1)
console.log(precoMinimo1)