import Knex from "knex";
import knex from "knex";

export class BaseDatabase {
    protected static connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,

        },
    });
}

// BaseDatabase.connection()
