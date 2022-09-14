export type User = {
    cpf: string;
    name: string;   
    birthdate: string;
    balance: number;
    transactions: Transaction[];
}

export type Transaction = {
    value: number;
    date: string;
    description: string;
}