import { PostBusiness } from "../src/business/PostBusiness"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IGetPostsInputDTO } from "../src/models/Post"


describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0].toBeInstanceOf(Post))
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content:"Testes do mock"
        }

        const response = await postBusiness.createPost(input)
        expect(response.message).toBe("Post criado com sucesso")
    })
})