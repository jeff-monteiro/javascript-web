const frutas = ['Abacaxi', 'Abacate', 'Manga', 'Maça', 'Pera', 'Pitomba', 'Tamarindo']
sortearFruta = () => {
  const indice = Math.floor(Math.random() * frutas.length)
  const frutaSorteada = frutas[indice]
  console.log(`Minha fruta sorteada foi: ${ frutaSorteada }!`)
}
 return(sortearFruta())