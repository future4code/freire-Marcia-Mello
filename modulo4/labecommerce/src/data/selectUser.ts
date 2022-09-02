import { userData } from "../Types/typesUser";
import connection from "./baseDataBase";

export default async function selectUser(userId:string):Promise<userData | undefined> {

    const result = await connection("Labecommerce_user").select("*").where({id:userId})
    
    const userType:userData = {
        id:result.id,
        name:result.name,
        email:result.email,
        password:result.password

    }
    
    return userType.email ? userType : undefined

}
