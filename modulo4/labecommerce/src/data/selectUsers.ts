import  { userData } from "../types";
import  connection  from "./baseDataBase"


const typeUser = (user: any) => {
    const createUser: userData={
        id:user.id,
        name:user.name,
        email:user.email,
        password:user.password
    }

    return createUser
}

export default async function selectUsers(): Promise< userData[] | undefined> {


    const result = await connection("labecommerce_users")

    const allUserType =  result.map((user) => {
        return typeUser(user)
    })

    console.log(allUserType);
 
}