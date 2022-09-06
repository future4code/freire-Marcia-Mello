import {transaction} from "./transaction";


// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];


  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
  
//   }

//  Exercício1b

export class UserAccount {

    user.cpf: string;
    user.name: string;
    user.age: number;
    user.balance: number = 0;
    user.transactions: Transaction[] = [];

    public getCpf(): string {
            return this.cpf
    }

    construtor(cpf:string, name:string, age:number, balance:number) {
        this.cpf = "666.666.666.66"
        this.name = "Jim Gray" 
        this.age = 25
    }

    }
export class Transaction {
    private description: string,
    private value: number,
    date: string

    constructor (
        description:string,
        value:number,
        date:string
    )
 {   
    this.description = description 
    this.value = value
    this.date = date 
}

public getDescription(): string {
    return this.description
}
public getValue(): number{
    return this.value 
}
 
public getDate():string{
    return this.date
}

public setTransaction(newTransactions:Transaction): void

{
    this.transactions.push(new Transaction)
}

}