import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { UserController } from './controller/UserController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const userController = new UserController()

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)
app.get("/users", userController.getUsers)
app.delete("/users/:id", userController.deleteUser)
app.put("/users/:id", userController.editUser)