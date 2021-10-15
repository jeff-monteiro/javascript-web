const livros = [ 'CSS3', 'Javascript', 'PHP', 'HTML', 'React' ] //Lembrando: Todo array em JS é um objeto.
let livros1 = livros.map((livro) => 'Livro ' + livro) //Cria um array a partir da coleção LIVROS
let livros2 = livros.map((livro, index) => 'Livro ' + index + ' ' + livro) //Cria um novo array informando a posição do item no array

console.log(livros)
console.log(livros1)
console.log(livros2)