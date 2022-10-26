import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {

})

app.use("/api/products")

type product = {
    id: string,
    name: string
}

let products: product[] = [
    {
        id: "1" ,
        name:"prancha"
    },

    {
        id: "2",
        name: "parafina"
    },

    {
        id: "3",
        name: "longboard"
    },

    {
        id: "4",
        name: "quilha"
    },

    {
        id: "5",
        name: "t-shirt UV"
    },

    {
        id: "6",
        name: "sun glasses"
    },


]

app.get(`/products`, (req: Request, rest: Response) => {
    let errorCode: number = 400 
    try  {
        const name: string = req.query.name as string
        const product: product | undefined = products.find((product) => product.name === name)
        if(!product) {
            errorCode = 404
            throw new Error("Product not found")
        }
        rest.status(200).send(product)
    }catch(error:any) {
        rest.status(errorCode).send({message: error.message}) 


    }
})

app.get(`/products/:id`, (req: Request, res: Response) => {
   let errorCode = 400
    try{
        const id: string = String(req.params.id)
        if(isNaN(id)) {
            errorCode = 422
            throw new Error("Invalid id")
        }


        const product = products.find((product) => {
            return product.id ===id  
        })

        if(!product) {
            errorCode = 404
            throw new Error("Product not found")
        }

        res.status(200).send(product)

        
    }catch(error:any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.post('/products', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        const {id, name} = req.body
        
        if(!id || !name) {
            errorCode = 422
            throw new Error('Please check the fields')
        }

         const newProduct: product = {
            id,
            name
        }

        products.push(newProduct)

        res.status(201).send({message: 'Product created successefully'}) 

    }catch(error:any) {
        res.status(errorCode).send({message: error.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error('Failure upon starting server.');
    }
});