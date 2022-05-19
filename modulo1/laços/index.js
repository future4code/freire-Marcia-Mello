// O que o código abaixo está fazendo?
//  Qual o resultado impresso no console?

// let valor = 0
// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)
// a. O que o código abaixo está fazendo?  Esta percorrendo os valores contidos numa array.

// b. vai imprimir 4 embora tenha rodado o programa 5

// 2- Leia o código abaixo

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) O que vai ser impresso no console?
// Uma lista de numeros maiores que 18
// b) Se eu quisesse acessar 
// o índice de cada elemento dessa lista, o for...of... é 
// suficiente? Se sim, o que poderia ser usado para fazer isso?
// 
//3- Qual seria o resultado impresso no console,
// se o usuário digitasse o número 4 ?

// Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos 
// itens abaixo, realizando as operações pedidas:

const numeroBichos = prompt("quamtos bichinhos?")

function bichos(numeroBichos) {
    const conversaoParaNumero = Number(numeroBichos)
    let novoArray = []
    2

    for(let i = 0; i <= conversaoParaNumero; i++){
        if(conversaoParaNumero !== 0){
            const nomeBichinho = prompt("Qual o noome do bichinho?")
            novoArray.push(nomeBichinho)
        } else {
            console.log("Que pena! Você pode adotar um!");
        }
    }

    console.log(novoArray)
}

bichos(numeroBichos)











const arrayOriginal = [1, 2, 3, 4]

function lerArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

lerArray(arrayOriginal)

function lerArrayDivididoPorDez(array){
    for(let i = 0; i < array.length; i++){
         console.log(array[i] / 10)
    }
}
lerArrayDivididoPorDez(arrayOriginal)

function criarArray(array){
    let novoArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            novoArray.push(array[i])
        }
    }

    console.log(novoArray)
}

criarArray(arrayOriginal)

function lerString(array){
    let novoArray = [];
    for(let i = 0; i < array.length; i++){
        novoArray.push(`o elemento do index ${i} é: ${array[i]}`)
    }
    console.log(novoArray)

}
lerString(arrayOriginal)