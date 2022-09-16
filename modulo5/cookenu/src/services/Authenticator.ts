import * as jwt from "jsonwebtoken";

export interface AuthenticationData {
    id: string;
    password: string;
}

export interface UsersInfoForToken {
    id: string;
    password: string;
}

export class Authenticator {
    public generate(input: AuthenticationData, expiresIn: string): string {
        const token = jwt.sign(
            {
                id: input.id,
                password: input.password
            },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );

        return token;
    }

    public getTokenData(token: string): AuthenticationData {
        const result = jwt.verify(token, process.env.JWT_KEY as string) as UsersInfoForToken;
        return {
            id: result.id,
            password: result.password
        }
    }
}    