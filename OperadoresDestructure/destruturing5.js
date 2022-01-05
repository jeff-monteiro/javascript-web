const livros = [
  {name: "React" , autor: "Mauricio Samy"},
  {name: "CSS", autor: "Jefferson Monteiro"},
  {name: "HTML5", autor: "Karoliny Freitas"}
]
// exemplo de destructuring com Arrays
let [livro1, livro2, livro3] = livros
console.log(livro1.name)
console.log(livro3.autor)