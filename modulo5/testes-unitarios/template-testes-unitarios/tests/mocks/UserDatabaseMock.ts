import {USER_ROLES } from "../..src/models/User"
import { ITokenPayload } from "../../src/services/Authenticator"
import { IUserDB } from "../../src/models/User"

public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    switch (email) {
         case "usermock@gmail.com":
            const normalUser: IUserDB = {
                id: "id-mock",
                name:"User-Mock",
                email: "usermock@gmail.com",
                password:"hash-mock",
                role: USER_ROLES.NORMAL
            }

            return normalUser

        case "astrodev@gmail.com":
            const adminUser: IUserDB = {
                id: "id-mock",
                name: "Astrodev",
                email: "astrodev@gmail.com",
                password: "hash-bananinha",
                role: USER_ROLES.ADMIN

            }
            
            return adminUser
            
        default:
            return undefined
    }

}

    public createUser = async (user: User): Promise<void> => {}















