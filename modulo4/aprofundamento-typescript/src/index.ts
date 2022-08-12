// exercicio 1
// a
let minhaString: string = "Marcia"

console.log(minhaString)

// minhaString = 1

console.log(minhaString)

// b
let meuNumero: number | string = 57
console.log(meuNumero)

meuNumero = "batatinha"
console.log(meuNumero)

// c
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string


}
// d
enum Role {
    AZUL = 'Azul',
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    ANIL = "Anil",
    VIOLETA = "Violeta",
    LARANJA = "Laranja"
}
const pessoa: Pessoa = {
    nome: "Marcia",
    idade: 57,
    corFavorita: Role.AMARELO
}
console.table(pessoa)

// exercicio 2
// a

// a entrada é um array e a saída é um objeto
type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

// b
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([1, 5, 9, 12, 3]))

// c
type AmostraDeIdades = {
    numeros: number[];
    obterEstatisticas: (numeros: number[]) => Estatistica
}

// Exercicio3

// a
type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

// b
// Recebe um array de posts e um autor  e retorna um array com o autor informado

function buscarPostsPorAutor(posts: Post[], autorInformado: string) {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

// 4
// a
// criado
// b
// Daria o comando tsc exercicio-4.ts
// c
//  Se este arquivo estivesse dentro da pasta src ele não rodaria
//  Exercicio 5
//  a
// Enquanto o tsconfig.json que instalamos no começo da semana tem 11 opções e o target é es6 , no que acabei de baixar o target é es5 e também é mais simples só tem 6 opções 