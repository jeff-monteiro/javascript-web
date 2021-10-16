const [a] = [10]
console.log(a)

const [n1, , n3, n4, , n6 = true] = [10, 7, 9, 5] //destructuring de um array
console.log(n1, n3, n4, n6)

const [ , [, numero1]] = [[8, 7],[2, 10]] //destructuring de dentro de um array que por sua vez está dentro de outro array
console.log(numero1)