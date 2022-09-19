import { UserAccount } from "./userAccount";
// const app = express();

// app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//         console.error('Failure upon starting server.');
//     }
// }

// Exercício 1a
//  Para auxiliar as ações que devem ser executadas ao criar uma estancia de classes.
//  Ele pode receber parametros que devem ser passados no momento em que as estancias saõ criadas



// Exercício 1b
const userAccount: UserAccount = new UserAccount
                    ("Jim Gray",
                    666.666.666.66, 25)
                                           
console.table(userAccount)

const userAccount1:UserAccount = new UserAccount
                    ("Xavier,
                    111.111.111.11, 40)

// Exercício 1c =usando os métodos getters para pegar atributos e setters para definir

// Exercício 2

 // type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

const transaction1:Transaction = new Transaction("Teste", 50, "01/04/2022")
userAccount1 setTransaction(transaction1)

console.log(userAccount1, user.getTransaction())

// Exercício 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }