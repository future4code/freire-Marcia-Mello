// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((num) => {
        return num % 2 === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const listaDePares = array.filter((num)=>{
        if(num % 2 === 0){
            return num
        }
    })
        
    return listaDePares.map((par) => Math.pow(par,2));
}   

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    // let novoObjeto = {
    //     maiorNumero: 0,
    //     maiorDivisivelPorMenor: false,
    //     diferenca: 0
    // }

    // if(num1 > num2 ) {
    //     novoObjeto.maiorNumero = num1
    //     if(novoObjeto.maiorNumero % num2 === 0){
    //         novoObjeto.maiorDivisivelPorMenor = true
    //     }
    // } else if(num2 > num1) {
    //     novoObjeto.maiorNumero = num2
    //     if(novoObjeto.maiorNumero % num1 === 0){
    //         novoObjeto.maiorDivisivelPorMenor = true
    //     }
    // }


    // const maiorNumero= [num1, num2]
    // const maiorDivisivelPorMenor: true,
    // const diferenca= (num1 - num2)

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];

    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const novoArray = []

    const sortedArray = array.sort((a,b) => b - a)

    novoArray.push(sortedArray[1])
    novoArray.push(sortedArray[sortedArray.length - 2])

    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const novoArray = []

    filme.atores.map((ator) => {
        return novoArray.push(` ${ator}`)
    })

    novoArray[0] = novoArray[0].replace(" ", "")

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${novoArray}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"

    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasFiltradas = pessoas.filter((pessoa) => {
        return pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })

    return pessoasFiltradas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasFiltradas = pessoas.filter((pessoa) => {
        return pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60
    })

    return pessoasFiltradas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((cliente) => {
        cliente.compras.map((compra) => {
            cliente.saldoTotal = cliente.saldoTotal - compra
        })

        cliente.compras = []

        return cliente
    })  
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        if (a.nome < b.nome)
            return -1;
        if (a.nome > b.nome)
            return 1;
        return 0;
    })

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const datasOrdenadas =  consultas.sort((a, b) => {
        a.dataDaConsulta > b.dataDaConsulta
    })

    console.log(datasOrdenadas)
}

retornaArrayOrdenadoPorData(consultas)