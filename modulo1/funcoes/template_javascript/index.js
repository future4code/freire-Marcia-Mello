// Exercício de interpretação de código
// 1- Leia o código abaixo

// function minhaFuncao(variavel) {
//     return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. o que vai ser impresso no console? os numeros 10 2 50
// b. o que aconteceia se retirasse os dois console.log
// e simplesmente invocasse a função minhaFuncao(2)
// e minhaFuncao(10) o que apareceria no console?
// function minhaFuncao(variavel) {
//     return variavel * 5
// }
//     minhaFuncao(2)
//     mi  nhaFuncao(10)
// não apereceria nada porque precisaria de um console.log

// 2-leia o código abaixo 

// let textoDoUsuario = prompt("Eu gosto de cenoura?");

// const outraFuncao = function(texto) {
//     return texto.toUpperCase(). includes("cenoura")
// }
//  const resposta = outraFuncao(textoDoUsuario)
//  console.log (resposta)
 
//  a. escreve a palavra cenoura com letras minusculase da uma resposta booleana

// b.1-true, b.2 toUpperCase, true e b3.trim, true

// Exercícios de escrita de código
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando
// algumas informações sobre você, como:
// "Eu sou Marcia, tenho 56 anos, moro no Rio de Janeiro e sou estudante."
// const pergunta = "Quem é você?, Quantos anos você tem?, Onde vocÊ mora?, O que você faz?"
// const resposta = prompt("Quem é você?, Quantos anos você tem?, Onde você mora?, O que você faz?")

// console.log (resposta)

// b) Agora escreva uma função que receba 4 parâmetros que correspondem as informações
// de uma pessoa: O nome(string), a idade(number), a cidade(string), e uma profissão(string. Ela deve retornar uma strig que unifique todas as informações)
// da pessoa em uma só mensagem com template:

// Eu sou[NOME], tenho[IDADE] anos, moro em[ENDEREÇO], e sou[PROFISSÃO].


const nome = "Marcia"
const idade = 56

function escreverDadosDoUsuario (nome, idade, endereco, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`   
}
console.log(escreverDadosDoUsuario(nome, idade, "comendador siqueira", "professora"))
// 2- Escreva as funções explicadas abaixo:
// a.Escrever uma função que receba 2 números come parâmetros
function somar (num1, num2) {
    return num1 + num2

}
console.log(somar(4, 5))

// b. facça uma função que retorne booleano, maior ou igual
function compararNumeros (num1, num2) {
    return num1 >= num2 
}
console.log(compararNumeros(4, 5))

// c.Escreva uma função q receba um num. e devolva booleano, se é par.
function valor (num1) {
    return num1 % 2 == 0 ? "par" : "impar"
}
console.log(valor(6))

// d. faça uma função que receba uma mensagem string como 
// parâmetro e imprima o tamanho dessa mensagem, juntamente 
// com uma versão dela em letras maiusculas

function formatar (mensagem) {
    return `${mensagem.toUpperCase()} tem ${mensagem.length} letras`
}
console.log(formatar("batata"))

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

function somar (num1, num2) {

    return num1 + num2 
}

function subtracao (num1, num2) {
    return num1 - num2 
}

function divisao (num1, num2) {
    return num1 / num2 
}

function multiplicacao (num1, num2) {
    return num1 * num2 
}

console.log(operacoes())

const operacoes = () => {
    const valor1 = prompt("Digite o primeiro número")
    const valor2 = prompt("Digite o segundo número")

    const resultadoSoma = somar(valor1, valor2)
    const resultadoSubtracao = subtracao(valor1, valor2)
    const resultadoDivisao = divisao(valor1, valor2)
    const resultadoMultiplicacao = multiplicacao(valor1, valor2)

    return `
        Número inseridos: ${valor1} e ${valor2}\n
        Soma: ${resultadoSoma}\n
        Diferença: ${resultadoSubtracao}\n
        Multiplicação: ${resultadoMultiplicacao}\n
        Divisão: ${resultadoDivisao}
    `
}