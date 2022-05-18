// Exercícios de interpretação de código
// a. o código if/else foi usado para testar a paridade dos números
// b. números pares
// c. numeros impares

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada
//  para automatizar algumas tarefas de um supermercado:
// a) Para que serve o código acima?
// colocar prço nas frutas
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// 2.25
// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo 
// acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// 5
// Leia o código abaixo:
// a) O que a primeira linha está fazendo?
// que o número desejado é maior que 0
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
//  E se fosse o número -10?
// true, false
// c) Haverá algum erro no c , não sei
// 
// - **Exercícios de escrita de código**
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima
//  no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
// 
//     const pergunta = prompt("digite sua idade.")

//  function podeDirigir (idade) {
//     const idadeConvertida = Number(idade)

//     if(idadeConvertida > 18) {
//         return "Você pode dirigir"
//     } else {
//         return "Você não pode dirigir"
//     }
//  }

//  console.log(podeDirigir(pergunta))

//  Agora faça um programa que verifica que turno do dia um aluno estuda.
//  Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem
//  "Bom Dia!","Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


// Exercício 1
// Leia o código abaixo. Indique todas as mensagens impressas no console, sem executar o programa
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a.", resultado) false

// resultado = bool1 && bool2 && bool3
// console.log("b.", resultado) false

// resultado = !resultado && (bool1 || bool2)
// console.log("c.", resultado) true

// console.log("d.", typeof resultado) Booleans

// Exercício 2
// Seu colega se aproxima de voce falando que o código dele não funciona como devia.
// Vamos ajudá-lo: consegue perceber o problema? Sim, o código não funcionou porque esta
// somando duas strings.
// O que será impresso no console? Só vai aparecer os números e não a soma deles

// Exercício 3
// Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = number(primeiroNumero) + number(segundoNumber)
// console.log(soma)


// Exercício escrita de código
// 1- Faça um programa que:
// a- pergunte a idade do usuário
// b- pergunte a idade do melhor amigo ou amiga
// c- imprima no console a seguinte mensagem "Sua idade é maior do que a do seu melhor amigo?"
// true ou false
// d- imprima no console a diferença de idade

// console.log("a.", resultado)
// const idade = prompt("Quantos anos voce tem?")
// const idade2 = prompt("Qual a idade do seu melhor amigo?")

// console.log("sua idade é maior do que a do seu melhor amigo?")
// const eMaior = Number(idade) > Number(idade2)
// console.log(eMaior)
// const diferenca = Number(idade) - Number(idade2)
// console.log(diferenca)

// Agora faça um programa que verifica que turno do dia 
// um aluno estuda. Peça para digitar M (matutino) ou
//  V (Vespertino) ou N (Noturno). Imprima no console
//  a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
//  Utilize o bloco if/else
let turno = prompt("Qual turno você estuda M/ V/ N (manhã) ou(Vespertino) ou(Noturno)?").toUpperCase()

function bomdiaOuBoanoiteIf(turno) {
    if (turno === "M") {
        console.log("Bom dia!")

    } else if (turno === "V") {
        console.log("Boa Tarde!")

    } else if (turno === "N") {
        console.log("Boa noite!")

    } else {
        console.log("Digite apenas m, v ou n")
    }
}

bomdiaOuBoanoiteIf(turno)

// 3

function bomdiaOuBoanoiteSwitch(turno) {
    switch (turno) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Bom Tarde!")
            break;
        case "N":
            console.log("Boa noite!")
            break;
        default:
            console.log("Digite apenas m, v ou n")
    }
}

bomdiaOuBoanoiteSwitch(turno)

// Considere a situação: você vai ao cinema com um amigo
// ou amiga, porém ele/ela só assistirá a um filme com você
// se ele for do gênero fantasia e se o ingresso está abaixo
//  de 15 reais. Faça um código que pergunta ao usuário
// qual o gênero de filme que vão assistir e
//  outra pergunta sobre o preço do ingresso, então
// verifique se seu amigo ou amiga vai topar assistir
// o filme. Caso positivo, imprima no console a mensagem:
//  "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const cinema = prompt("Digite o gênero de filme que você gostaria de ver");
const valor = prompt("Insira o valor desejado");

function irAoCinema(tipoFilme, valor) {
    if (tipoFilme === "fantasia" && Number(valor) <= 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(");
    }
}

irAoCinema(cinema, valor)
