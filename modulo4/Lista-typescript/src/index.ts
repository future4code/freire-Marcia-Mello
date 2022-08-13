// console.log("Lista typescript")

// // Exercicio 1
// // Crie um função que receba uma string com o
// // nome e outra string com uma data de
// // nascimento (ex.: “24/04/1993”).
// // A função deve separar o dia, o mês e ano 
// // e retornar uma string no seguinte formato: 
// // "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

// type User = {
//     name: string,
//     birthdate: string
// }


// const user: User = {
//     name: "Marcia",
//     birthdate: "04/06/1965"
// }


// const mostrarUsuario = (name: string, birthdate: string) => {

//     const spliedBirthdate: string[] = birthdate.split(".");
//     const dia: string = spliedBirthdate[0];
//     const mes: string = spliedBirthdate[1];
//     const ano: string = spliedBirthdate[2];

//     return `Olá me chamo ${name}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
// }

// console.log(mostrarUsuario(user.name, user.birthdate))

// //  Exercicio 2
// // Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

// const retornaTipo = (parametro: any) => {
//     return typeof parametro
// }

// let test;
// let arr: any[] = []
// let real = true

// console.log(retornaTipo("batata"))
// console.log(retornaTipo(34343463563))
// console.log(retornaTipo(user))
// console.log(retornaTipo(test))
// console.log(retornaTipo(arr))
// console.log(retornaTipo(real))
// // Exrecicio 3
// // Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 

// enum GENERO {
//     ACAO = "ação",
//     DRAMA = "drama",
//     COMEDIA = "comédia",
//     ROMANCE = "romance",
//     TERROR = "terror"
// }

// type Filme = {
//     nome: string;
//     anoLancamento: number;
//     genero: GENERO;
//     pontuacao?: number;
// }

// const returnFilm = (nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number) => {

//     const filme: Filme = {
//         nome,
//         anoLancamento,
//         genero
//     }

//     if (pontuacao) {
//         filme.pontuacao = pontuacao;
//     }

//     return filme;
// }


// console.log(returnFilm("Duna", 2021, GENERO.ACAO))

// console.log(returnFilm("Duna", 2021, GENERO.ACAO, 97))

// // exercicio 4
// // O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

// enum SETOR {
//     MARKETING = "marketing",
//     FINANCEIRO = "financeiro",
//     VENDAS = "vendas"
// }

// type Funcionario = {
//     nome: string;
//     salario: number;
//     setor: SETOR;
//     presencial: boolean;
// }

// const funcionarios: Funcionario[] = [
//     { nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
//     { nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false },
//     { nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true },
//     { nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false },
//     { nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true },
//     { nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true },
//     { nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true }
// ]

// const retornaPessoaPorSetor = (funcionarios: Funcionario[]) => {
//     return funcionarios.filter((funcionario: Funcionario) => {
//         return funcionario.setor === SETOR.MARKETING && funcionario.presencial === true;
//     })
// }

// console.log(retornaPessoaPorSetor(funcionarios));

// // exercicio 5
// // Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

// enum ROLE {
//     ADMIN = "admin",
//     USER = "user"
// }

// type FuncionariosPerRole = {
//     name: string;
//     email: string;
//     role: ROLE;
// }

// const funcionariosPerRole: FuncionariosPerRole[] = [
//     { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
//     { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
//     { name: "Aline", email: "aline@email.com", role: ROLE.USER },
//     { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
//     { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
//     { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
// ]

// const returnAdmin = (funcionarios: FuncionariosPerRole[]) => {
//     const emails: string[] = []

//     funcionarios.filter((funcionario: FuncionariosPerRole) => {
//         if (funcionario.role === ROLE.ADMIN) {
//             emails.push(funcionario.email);
//         }
//     })

//     return emails;
// }

// console.log(returnAdmin(funcionariosPerRole));

// // exercicio 6
// // Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. Exemplo:

// type Cliente = {
//     cliente: string;
//     saldoTotal: number;
//     debitos: number[]
// }

// const clientes: Cliente[] = [
//     { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
//     { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
//     { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
//     { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
//     { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
//     { cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// const calcularSaldo = (clientes: Cliente[]) => {
//     const emprestimo: Cliente[] = [];

//     clientes.map((cliente: Cliente) => {
//         if (cliente.debitos.length > 0) {
//             cliente.debitos.map((debito) => {
//                 cliente.saldoTotal = cliente.saldoTotal - debito
//             })

//             cliente.debitos = []
//         }

//         if (cliente.saldoTotal < 0) {
//             emprestimo.push(cliente)
//         }
//     })

//     return emprestimo;
// }

// console.log(calcularSaldo(clientes));

// exercicio 7
// Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

// type Produto = {
//     nome: string;
//     quantidade: number;
//     valorUnitario: number | string;
// }

// const estoque: Produto[] = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
// ]

// const ajustaPreco = (preco: number): string => {
//     const valorAjustado: string = preco.toFixed(2).replace('.', ',')
//     // console.log("R$ " + typeof valorAjustado)
//     return "R$ " + valorAjustado
// }

// const listarEstoque = (estoque: Produto[]) => {
//     const listaEstoque: Produto[] = estoque.map((produto: Produto) => {
//         // console.log( produto.valorUnitario)
//         produto.valorUnitario = ajustaPreco(produto.valorUnitario as number);

//         return produto;
//     })

//     return listaEstoque.sort((a, b) => {
//         return b.quantidade - a.quantidade
//     })
// }

// console.log(listarEstoque(estoque))

// exercicio 8
// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// import readline from 'readline';

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const verificaCarteira = () => {
//     r1.question("Digite sua data de nascimento", function (nascimento: string) {
//         console.log(nascimento)
//     })

//     // return nascimento
// }

// console.log(verificaCarteira())

// Exercício 9 
// Considerando tudo o que foi mencionado, escreva uma função que receba uma palavra (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

const returnAnagramQuantity = ( word: string) => {
    const removeDupliicate = removeDuplicates(word)
    console.log(removeDuplicates)
    let letters = removeDupliicate.length;
    
    let anagramNumber = letters

    for(let i:number = letters; i >= 1; i--) {
        if(i - 1 !== 0){
            anagramNumber = anagramNumber * (i - 1)
        }
    }

    return anagramNumber;
}

function removeDuplicates(word: string)
{
    let wordLength = word.length;
   
    let response = "";
    for (let i = 0; i < wordLength; i++)
    {
        let j;
        for (j = i + 1; j < wordLength; j++)
            if (word[i] == word[j])
                break;
   
        if (j == wordLength)
            response = response + word[i];
    }

    return response;
}

console.log(returnAnagramQuantity("mesa"))