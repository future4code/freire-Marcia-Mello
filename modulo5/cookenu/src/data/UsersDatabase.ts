import { User } from "../entities/Users";
import { BaseDatabase } from "./BaseDatabase";

export class UsersDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection("users_cookenu").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
            });
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }
    
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const users = await BaseDatabase.connection("users_cookenu").select('*').where({ email: email });

            return users[0] && User.toUserModel(users[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async getRecipe() {
        try {
            const users = await BaseDatabase.connection("users_cookenu").select(
                "id",
                "nome",
                "email",
            );

            return users.map((user: any) => User.toUserModel(user))
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
