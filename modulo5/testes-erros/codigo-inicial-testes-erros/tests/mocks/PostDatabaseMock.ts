import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ILikeDB, IPostDB, Post } from "../../src/models/Post"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {
        // const postDB = this.toPostDBModel(post)

        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .insert(postDB)
    }

    public getPosts = async (): Promise<IPostDB[]> => {
        // const postsDB: IPostDB[] = await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .select()

        // return postsDB

        const postsDB: IPostDB[] = [
            {
                id: "201",
                content: "Olá, sou novo por aqui!",
                user_id: "101"
            },
            {
                id: "202",
                content: "Bom dia, família!",
                user_id: "102"
            },
            {
                id: "203",
                content: "Receba!",
                user_id: "103"
            }
        ]

        return postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
        // const result: any = await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .select()
        //     .count("id AS likes")
        //     .where({ post_id: postId })

        // return result[0].likes as number

        if (postId == "201") return 1

        return 0
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        // const postsDB: IPostDB[] = await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .select()
        //     .where({ id: postId })

        // return postsDB[0]

        switch(postId) {
            case "201":
                return {
                    id: "201",
                    content: "Olá, sou novo por aqui!",
                    user_id: "101"
                }

            default:
                return undefined
        }
    }

    public deletePost = async (postId: string): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .delete()
        //     .where({ id: postId })
    }

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        // const likesDB: ILikeDB[] = await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .select()
        //     .where({ post_id: postId })
        //     .andWhere({ user_id: userId })

        // return likesDB[0]

        if (postId == "201" && userId == "id-mock") {
            return {
                id: "301",
                post_id: "201",
                user_id: "id-mock"
            }
        }

        return undefined
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .insert(likeDB)
    }

    public removeLike = async (postId: string, userId: string): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .delete()
        //     .where({ post_id: postId })
        //     .andWhere({ user_id: userId })
    }
}