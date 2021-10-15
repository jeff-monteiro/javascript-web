const livrosA = [
  {titulo: "Construindo sites com HTML", autor: "Jefferson Monteiro"},
  {titulo: "Web Scraping", autor: "Ryan Michael"},
  {titulo: "CSS3", autor: "Karoliny Freitas"}
];

let livros1 = livrosA.map((livro) => "Livro " + livro.titulo)
let livros2 = livrosA.map((livro) => "Livro " + livro.autor)

console.log(livros1, livros2)