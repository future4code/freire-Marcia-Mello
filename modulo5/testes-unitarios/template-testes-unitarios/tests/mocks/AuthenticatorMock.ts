import {USER_ROLES } from "../..src/models/User"
import { ITokenPayload } from "../../src/services/Authenticator"

export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload): string => {
        switch (payload.role) {
            case USER_ROLES.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    
     }
    
    public getTokenPayload = (token: string): ITokenPayload | null => {
        switch (token) {
            case  "token-mock-admin":
                const adminPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.ADMIN
                }

                return adminPayload

            case "token-mock-normal":
                const normalPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }

                return normalPayload

                
        }

    }
}

















public findByEmail = async(email: string): Promise<IUserDB | undefined> => {
    switch (email) {
        case"usermock@gmail.com":
        const normalUser: IUserDB = {
            id: "id-mock",
            name: "User-mock",
            email: "usermock@gmail.com",
            password: "hash-mock",
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

    }
}