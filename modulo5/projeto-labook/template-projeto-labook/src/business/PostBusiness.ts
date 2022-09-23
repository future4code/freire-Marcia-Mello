import { TokenClass } from "typescript"
import { PostDatabase } from "../database/PostDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async(post:ICreatePostDTO) => {
        const { token. content } = exist:

     }
    }

}