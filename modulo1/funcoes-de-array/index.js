//  turma Freire, 19/5/22, funcoes-de-array
// 1-Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//   1a. No console vai aparecer os nomes e apelidos como na array original.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
//   2a.No console vai aparecer os nomes dos usuário
// [`´Amanda Rangel`, `Laís Petra`,`Letícia Chijo`]

//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
//   const usuarios = [

//   console.log(novoArrayC)
//   3a.No console vai aparecer o apelido de todas menos da "Chijo'

// Exercícios de escrita de código

// Dado o seguinte array de cachorrinhos que são clientes
//  de um pet shop, realize as operações pedidas nos itens 
// ;abaixo utilizando as funções de array map e filter:
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// //  a) Crie um novo array que contenha apenas o0
// //  nome dos doguinhos
// // const novoArrayA = pets.map(pets, indice, array) => {
// //     console.log(pets, indice, array)
// // }

// const novoArrayA = pets.map((pet) => {
//     return pet.nome
// })
// console.log(novoArrayA)

// //b- Crie um novo array apenas com os cachorros salsicha

// const novoArrayB = pets.filter((pet) =>{
//     return pet.raca === "Salsicha"
// })
    
// console.log(novoArrayB)

// // c- Crie um novo array que possuirá mensagens para enviar para 
// // todos os clientes que são poodles. A mensagem deve ser: "Você ganhou
// //  um cupom de desconto de 10% para tosar o/a [NOME]!"
// const novoArrayC = pets.filter((pet) => {
//     if(pet.raca === "Poodle"){
//         return `Você ganhou um cupom de desconto de 10% para tosar o/a${pet.nome}`
//     }
// })

// console.log("C", novoArrayC)

// //2-Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a.Crie um novo array que contenha apenas o nome de cada item 

const novoArrayA = produtos.map((produtos, indice, Array)=> {
    console.log(produtos, indice, Array)


})
const novoArrayA = produtos.map((produtos) => {
    return produtos.nome

})
console.log (novoArrayA)

// c. Crie um novo array que contenha apenas os objetos da categoria Bebidas.
const novoArrayC = produtos.filter((produtos) => {
    return  produtos.categoria === Bebidas


})
console.log(novoArrayC)

//d.Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const (novoArrayD) = produtos.filter((produtos) =>{
    return produtos.nome === Ypê
})
console.log(novoArrayD)

