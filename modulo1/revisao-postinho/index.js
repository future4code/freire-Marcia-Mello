
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {
    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(2, 2))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior (a, b) {
    return `${a} é maior que ${b} ? ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const cadastro = () => {
    const usuario = []
    const nome = prompt("Digite seu nome");
    const idade = Number(prompt("Digite sua idade"));
    const senha = prompt("Digite sua senha");
    const nacionalidade = prompt("Digite sua nacionalidade");

    if(idade > 18 && senha.length >= 6 && nacionalidade === "brasileira"){
        usuario.push(nome, idade, senha, nacionalidade)
    }

    console.log(usuario)
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const senhaDoUsuario = prompt("Digite sua senha:")

    if(login === senhaDoUsuario){
        console.log("Usuário Logado")
    } else {
        console.log("Senha inválida")
    }
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    const nomeDoUsuario = prompt("Digite seu nome:")
    const vacinaTomada = prompt("Digite qual vacina você tomou:").toLowerCase()
    let tempo = 0;
    let data = "01/08/2021"

    switch(vacinaTomada){
        case "coronavac":
            tempo = 28
        break

        case "astrazenica":
            tempo = 90
        break

        case "pfizer":
            tempo = 90
        break

        default:
            tempo
    }
    
    console.log(`Olá ${nomeDoUsuario}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}`)

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nome === nomeDoUsuario){
            usuarios[i].imunizacao = "completa"
        }
    }

    console.log(usuarios)
}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].imunizacao !== "completa"){
            console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    const nomeDoUsuario = prompt("Digite seu nome:")
    const nascimentoDoUsuario = Number(prompt("Digite o ano do seu nascimento:"))
    const senhaDoUsuario = prompt("Digite seu senha:")
    const nacionalidade = prompt("Digite seu nacionalidade:")

    if(2022 - nascimentoDoUsuario < 18 || senhaDoUsuario.length < 6 || nacionalidade.toLowerCase() !== "brasileiro"){
        return "Seus dados são incompatíveis com a nossa plataforma"
    } else {
        const novoUsuario = {
            nome: nomeDoUsuario,
            ano: nascimentoDoUsuario,
            senha: senhaDoUsuario,
            nacionalidade: nacionalidade
        }

        usuarios.push(novoUsuario)
    }

    console.log(usuarios)
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    const senhaDoUsuario = prompt("Digite sua senha:")

    usuarios.map((usuario) => {
        if(usuario.senha === senhaDoUsuario){
            console.log("Usuário Logado")
        } else {
            console.log("Senha inválida")
        }
    })
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
    const vacinaTomada = prompt("Digite qual vacina você tomou:").toLowerCase()
    let tempo = 0;
    let data = "01/08/2021"

    switch(vacinaTomada){
        case "coronavac":
            tempo = 28
        break

        case "astrazenica":
            tempo = 90
        break

        case "pfizer":
            tempo = 90
        break

        default:
            tempo
    }

    usuarios[usuarios.length - 1].vacina = vacinaTomada;
    usuarios[usuarios.length - 1].imunizacao = "incompleta";

    return`Olá ${usuarios[usuarios.length - 1].nome}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`;

}
console.log(primeiraDoseDesafio());

const segundaDoseDesafio = (nomeDoUsuario) => {
    usuarios.filter((usuario) => {
        if(usuario.nome === nomeDoUsuario){
            usuario.imunizacao = "completa"
        }
    })

    console.log(usuarios)
}
console.log(segundaDoseDesafio("Marcia"));

const avisoAosAtrasadosDesafio = () => {
    usuarios.filter((usuario) => {
        if(usuario.imunizacao === "incompleta"){
            console.log(`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose da ${usuario.vacina}.`)
        }
    })
}

console.log(avisoAosAtrasadosDesafio());