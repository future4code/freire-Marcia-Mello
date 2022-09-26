import { sortAndDeduplicateDiagnostics } from "typescript"

// Exercício0
const isEven = (integer: number) => {
    return integer % 2 == 0
}

// Exercício1
const toUpperCase = (string: string): string => {
    return string.toUpperCase()
}

// Exercício2

const toSplit = (string: string): string[] => {
    return string.split("")

}

// Exercício3
const toNumber = (string: string): number => {
    return string.length
}

// Exercício4
const getLength = (string: string): number => {
    return string.length
}

// Exercício5
const randomNumberBettween1And10 = (): number => {
    const min = 1
    const max = 10
    const  result = Math.floor(Math.random() * (max - min + 1)) + min

    return result 
}

// exercício6
interface IUser {
    id: string,
    name: string,
    age: number 
}

const users: IUser[] = [
    {
        id: "1",
        name: "Spider Man",
        age: 20 
    },

    {
        id: "2",
        name: "Octopus",
        age: 40 
    },

    {
        id:"3",
        name: "Astrodev",
        age: 50
    }
]

// Exercício7
const calcAverage = (list: number[]): number => {
    let totalSum = 0

    for (let n of list) {
        totalSum += n
    }
    const average = Math.ceil(totalSum / list.length)
    
    return average 
}

//  Exercício8
const calcAge = (year: number): => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year

    return age 
}

// Exercício9
const formatDate = (initialDate: string): string =>  {
    const date = new Date(initialDate)
    const formattedDate = date.toLocaleDateString()

    return formattedDate
}

