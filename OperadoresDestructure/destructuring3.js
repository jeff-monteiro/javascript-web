rand = ({min = 0, max = 1000}) => {
  const valor = Math.random() * (max - min) + min
  console.log(Math.floor(valor)) 
}
return(rand({max: 50, min: 20}))