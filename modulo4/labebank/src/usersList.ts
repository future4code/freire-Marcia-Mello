import { User } from "./typings";

export let users: User[] = [
    {
        cpf:"111.111.111-11",
        name: "Alice",
        balance: 200,
        birthdate: "12/2/1989",
        transactions: [
            {
                value: 120,
                date: "12/12/2012",
                description: "comprei uma piscina"
            },
            {
                value: 10,
                date: "1/01/2012",
                description: "comprei um arroz"
            }
        ]
    },
    {
        cpf: "555.555.555-05",
        name: "Malévola",
        balance: 200,
        birthdate: "12/2/1989",
        transactions: [
            {
                value: 120,
                date: "12/12/2012",
                description: "comprei uma piscina"
            },
            {
                value: 10,
                date: "1/01/2012",
                description: "comprei um arroz"
            }
        ]
    }
]