import { UserDatabase } from "../database/UserDatabase"
import { ISignuptInputDTO } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignuptInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password 

        if (!name || !email || !password) {
            throw new Error("Uma ou mais informações inválidas!")
        }
        if (typeof name!=="string" || name.length < 3) {
            throw new Error("Nome inválido!")
        }
        if (typeof email !=="string" || email.length < 6) {

        }
        
        if (typeof password !== "string" || password.length < 6) {
            throw new Error("password inválido!")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB) {
            throw new Error("E-mail não cadastrado")
        }

        const user = new User{
            userDB.id,
            userDB.name,
            userDB.email,
            userdb.password,
            userDB.role
        }


        }

        const isPasswordCorrect = await this.hasManager.compare(password)

        if(!isPasswordCorrect){
            throw new Error("Senha incorreta!")
        }

        const payload: ITokenPayload ={
            email: user.getEmail(),
            password: user.getPassword()
        }

        const token = await this.authenticator.generateToken(payload)

        const response = {
            message: "Login realezado com sucesso",
            token
        }


    }
    


