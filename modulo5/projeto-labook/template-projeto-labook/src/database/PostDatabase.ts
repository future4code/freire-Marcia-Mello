import { BaseDatabase } from "./BaseDatabase"
import { LikeDB, Post } from "./BaseDatabase";
import connection  from connection;
export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    createPost = async (post: Post) => {
        await this.getConnection()
        .insert({
            id: post.getid(),
            content: post.getContent(),
            user_id: post.getUserId(),

        })
        .into(PostDatabase.TABLE_POSTS);
        return`Post criado com  sucesso!`
    };
    public getPosts = async () => {
        const result = await this.getConnection()
        .selec("*")
        .count("id")
        .into(PostDatabase.TABLE_LIKES)
        .where({post_id: postId});

        return  result[0]["count(id)"]as number;
    };

    publicfindPostById = async (postId: string) => {
        const result = await this.getConnection()
        .select("*")
        .from(PostDatabase.TABLE_POSTS)
        .where({post_id:postId});

        return result;
    };

    public getLikesPost = async()

    deletePost = async (postId: string) => {
        const result = await this.getConnection()
        .delete("*")
        .from(PostDatabase.TABLE_POSTS)
        .where({ id: postId});

        return "Post deletado com sucesso!";
    };
    public findLike = async (postId: string, userId: string) => {
        const result = await this.getConnection()

    }
}