let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// 1:no console1 a variavel b vale 10 
// no console2 variavel b foi modificada para 5,ficando console.log[a, b] a=10 e b=5
let a = 10
let b = 20
c = a
b = c
a = b

// console.log("resultado2", a, b, c)
// 2  sera impresso undefined porque o valor da variavel c nao foi definido.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
// 3 esse programa pergunta para o usuario quanto ele recebe por hora trabalhada e ele usa a variavel let porque esse valor pode ser alterado
// [horaDiaTrabalhada] 

//1 perguntar pro usuario"Qual o seu nome?"
const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual o sua idade?")
console.log(nome, "=", typeof name, idade, "=", typeof idade)

//strings e ela foi usada porque e uma constante
console.log(valor1, valor2)
console.log(nome, idade)
let souEstudante= true
let souCasada= true
semFilhos= false
