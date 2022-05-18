// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return  num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  return  altura * largura
}
console.log(calculaAreaRetangulo(3, 5))

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  return anoAtual - anoNascimento
}

console.log(imprimeIdade(2022, 1965))

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}
  console.log(calculaIMC(70, 1.65))

// EXERCÍCIO 04
    // implemente sua lógica aqui
 function imprimeInformacoesUsuario(nome, idade, email) {
  const nome = prompt("Qual o seu nome?")
  const idade = prompt  ("Qual a sua idade?") 
  const email = prompt ("Qual o seu email?")

  return ` Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`
 }

 console.log(imprimeInformacoesUsuario("marcia", "57", "mdpmell@gmail.com"))

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  const cores = [cor1, cor2, cor3]
  return cores

}

const cor1 = prompt("Qual a cor1?")
const cor2 = prompt("Qual a cor2?")
const cor3 = prompt("Qual a cor3?")

console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3))

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase
}

console.log(retornaStringEmMaiuscula("batata"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

console.log(calculaIngressosEspetaculo(3000, 100))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

console.log(retornaPrimeiroElemento([paz, paciÊncia, virtude]))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length]
}

console.log(retornaPrimeiroElemento([paz, paciÊncia, virtude]))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const newArray = array
  newArray[0] = array[array.length]
  newArray[array.length] = array[0]

  return newArray 
}

console.log(trocaPrimeiroEUltimo([ovos, carne, frango]))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase === string2.toUpperCase
}

console.log(checaIgualdadeDesconsiderandoCase("Ola", "olA"))

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}