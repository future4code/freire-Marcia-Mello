import { connection } from "./database";
import { userTable } from "./tables";

const getAllUserByDB = async () => {
    const result = await connection.raw(`
        SELECT * FROM ${userTable}
    `)

    if(!result) {
        throw new Error("Users not found")
    }

    return result;
}

export default getAllUserByDB;