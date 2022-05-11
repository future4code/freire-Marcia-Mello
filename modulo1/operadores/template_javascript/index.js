// Exercício 1
// Leia o código abaixo. Indique todas as mensagens impressas no console, sem executar o programa
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a.", resultado) false

resultado = bool1 && bool2 && bool3
console.log("b.", resultado) false
 
resultado = !resultado && (bool1 || bool2)
console.log("c.", resultado) true

console.log("d.", typeof resultado) Booleans

// Exercício 2
// Seu colega se aproxima de voce falando que o código dele não funciona como devia.
// Vamos ajudá-lo: consegue perceber o problema? Sim, o código não funcionou porque esta
// somando duas strings.
// O que será impresso no console? Só vai aparecer os números e não a soma deles

// Exercício 3
// Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = number(primeiroNumero) + number(segundoNumber)
console.log(soma)


// Exercício escrita de código
// 1- Faça um programa que:
// a- pergunte a idade do usuário
// b- pergunte a idade do melhor amigo ou amiga
// c- imprima no console a seguinte mensagem "Sua idade é maior do que a do seu melhor amigo?"
// true ou false
// d- imprima no console a diferença de idade

console.log("a.", resultado)
const idade = prompt("Quantos anos voce tem?")
const idade2 = prompt("Qual a idade do seu melhor amigo?")

console.log("sua idade é maior do que a do seu melhor amigo?")
const eMaior = Number(idade) > Number(idade2)
console.log(eMaior)
const diferenca = Number(idade) - Number(idade2)
console.log(diferenca)
