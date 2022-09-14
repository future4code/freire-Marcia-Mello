





export class Authenticator {

    public generateToken = (payload: AuthenticationData) => {
            const token = jwt.sign(payload,process.env.JWT_KEY as string,{expiresIn: process.env.EXPIRES_IN}
                
            )

            return token
       
    }

    public getTokenData= (token:string) : AuthenticationData => {
        const tokenData =
    }
}