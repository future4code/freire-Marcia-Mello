import {v4} from "uuid";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

class IdGenerator {

    generateId(): string{
	return v4();
    }
}

class hashManager {
    
    async hash(s: string): Promise<string>{
         //para esconder o texto precisamos:
         //do plaintext (que é nosso parametro s)
         //do nosso cost (que é o quanto vamos demorar pra esconder.
         //Quanto maior, mais escondido)
         //do salt (string aleatória que vai ser gerada aqui na função,
         //a partir do cost)
 
         const cost = Number(process.env.BCRYPT_COST!);
         const salt = await bcrypt.genSalt(cost);
         const cypherText = await bcrypt.hash(textToHide, salt);
 
         return cypherText;
     }
 
     async compare(plaintext: string, hash: string): Promise<boolean>{
         const hashCompare:boolean = await bcrypt.compare(plaintext, hash);
         return hashCompare;
     }
 }

 export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id,
            role: info.role},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATION_TIME}
        )
        return token;
    }

    getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData

    }
}