console.log(Math.ceil(6.1)) //CEIL arredonda o valor para cima(teto)

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'

console.log(obj1)
console.log(obj1.nome)

function Obj(nome){
  this.nome = nome
}
function Obj2(sobrenome){
  this.sobrenome = function(){
    console.log('Monteiro')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const obj4 = new Obj2()
console.log(obj2.nome)
console.log(obj3.nome)
obj4.sobrenome()