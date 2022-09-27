import { UserBusiness } from "../src/BUSINESS/UserBusiness"
import { ILoginInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./ mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDtabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test ("Um token é retornado quando o cadastro é concluído com sucesso", async () => {
        const input: ISignupInputDTO = {
            email: "fulaninho@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect (response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal") 
    
})
test("Um token é retornado quando o login é bem sucedido", async () => {
    const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "bananinha"
    }

    const response = await userBusiness.login(input)
    expect(response.message).toBe("Cadastro realizado com sucesso")
    expect(response.token).toBe("token-mock-admin")
})

})