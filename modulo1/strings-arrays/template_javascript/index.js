
Exercício de interpretação de código
1- Indique todas as mensagens impressas no console, sem executar o programa

let array
console.log('a. ', Array)
// array
array = null
console.log('b. ', array)
// null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,]
console.log('c. ', array.length)
// 10
let i = 0
console.log('d. ', array[i])
// 0
array[i=1] = 19
console.log('e. ', array)
// 18
const valor = array[i+6]
console.log('f. ', valor)
7

2- leia o código abaixo com atenção

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

SUBI NUM ÔNIBUS EM MARROCOS
SUBI NUM ÔNIBUS EM MIRROCOS
 27

Exercício 2
1- Faça um programa que pergunte ao usuário o seu nome e o seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem vinda(o), nomeDoUsuario!

const nome = prompt("digite seu nome")
const email = prompt("digite seu email")
console.log("O email " + email + " foi cadastrado com sucesso. Seja bem vindo(a), " + nome)


2- Fazer um programa que contenha um array com 5 das suas comidas preferida, armazenando
em uma variável.

const listaComida = ["japonesa", "francesa", "chinesa", "tailandesa", "italiana" ]
console.log(listaComida)

const frase =  `Essas são minhas comidas favoritas ${listaComida[0]}\n${listaComida[1]}\n${listaComida[2]}\n${listaComida[3]}\n${listaComida[4]}}`

console.log(frase)

const comida = prompt("Qual a sua comida preferida?")

listaComida[1] = comida

console.log(listaComida)

const listaDeTarefas = []
 
const tarefaUm = prompt("Qual a tarefa do dia?")
const tarefaDois = prompt("Qual a tarefa do dia?")
const tarefaTres = prompt("Qual a tarefa do dia?")

listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)

console.log(listaDeTarefas)

const tarefaADeletar = prompt("Qual a tarefa você quer remover")

listaDeTarefas.splice (3,1)



console.log(listaDeTarefas)
