import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { todoList } from "./lists/todo-list";
import { Todo } from "./typings";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error('Failure upon starting server.');
    }
});


// exercicio 1
app.get("/ping", (req: Request, res: Response) => {
    try {
        res.status(200).send("Pong! 🏓")
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})

// exercicio 4
app.get("/todos", (req: Request, res: Response) => {
    try {
        res.status(200).send(todoList)
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})


// body exemple
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false

// exercicio 5
app.post("/createTask", (req: Request, res: Response) => {
    try {

        const todo = {
            userId: req.body.userId,
            id: req.body.id,
            title: req.body.title,
            completed: req.body.completed
        }

        todoList.push(todo);

        res.status(200).send(todoList)
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})

// exercicio 6
app.put(`/changeTaskStatus/:id`, (req: Request, res: Response) => {
    try {

        const id: number = Number(req.params.id);
        const completed: boolean = req.body.completed;

        const filteredTodoList = todoList.filter((todo: Todo) => {
            if(todo.id === id){
                return todo.completed = completed
            }
            return todo;
        })

        res.status(200).send(filteredTodoList)
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})


// exercicio 7
app.delete("/todos/delete/:id", (req: Request, res: Response) => {
    try {

        const id: number = Number(req.params.id);

        const filteredList = todoList.filter((todo: Todo) => {
            return todo.id !== id
        })

        res.status(200).send(filteredList)
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})


// exercicio 8
app.get("/todos/:id", (req: Request, res: Response) => {
    try {

        const id: number = Number(req.params.id);

        const filteredList = todoList.filter((todo: Todo) => {
            return todo.id === id
        })

        res.status(200).send(filteredList)
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})