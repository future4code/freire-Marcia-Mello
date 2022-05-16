// Exercício de interpretação de código
// Tente responder os exercícios sem executar o cóodigo.
// 1a- Leia o código abaixo
// console.log1= Mateus Nachtergaele
// console.log2= Virginia Cavendish
// console.log-canal= "Canal Brasil", horario: "19h

// 2a-O que vai ser impresso no console?
// console.log1 = Juca
// console.log2 = Juba
// console.log3 = Goto
// b-Ela faz uma cópia de um objeto (ou array)

//3a- leia o código abaixo
// console.log(minhaFuncao) = false
// b-

// Exercício de escrita de código
// Resolva os passos a seguir: 

// const pessoa = {
//     nome:"Gustavo", 
//     apelidos:["Gu", "Gus","Guto"]
 
// console.log(Eu sou ${`pessoa.nome`}, mas pode me chamar de:${pessoa.apelidos}`)

// b.
const pessoa = {
    nome: "Gustavo",
    apelidos: ["Gu", "Gus", "Guto"]
}

function lerObjeto(objeto) {
	return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`
}

console.log(lerObjeto(pessoa))


const instrutor = {
    ...pessoa,
    apelidos: ["Alex", "Ale", "Xande"]

}
console.log(lerObjeto(instrutor))

// 2- a.Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const pessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}
const novaPessoa = {
    ...pessoa,
    nome: "Breno",
    idade: 20,
    profissao: "estudante"
}
// b. Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
const pessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}
const novaPessoa = {
    ...pessoa,
    nome: "Breno",
    idade: 20,
    profissao: "estudante"
}    
minhaFuncao(pessoa, novaPessoa)

return: [("bruno", 5, 23, "instrutor", 9), "Breno", 5, 20, "estudante", 9]



// Retorno: ["Bruno", 5, 23, "Instrutor", 9]






