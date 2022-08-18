import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { products } from "./data";
import { Product } from "./typings";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
// exercicio 1
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("A api está funcionando!")
})

// exercicio 3
app.post("/products/create", (req: Request, res: Response) => {

  const product: Product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  }

  products.push(product);

  res.status(200).send(products)
})

// exercicio 4
app.get("/products", (req: Request, res: Response) => {
  res.status(200).send(products)
})

// exercicio 5
app.put(`/product/update/:id`, (req: Request, res: Response) => {
  try {

    const id: string = req.params.id;
    const price: number = req.body.price;

    const filteredProducts = products.filter((product: Product) => {
      if (product.id === id) {
        return product.price = price
      }
      return product;
    })

    res.status(200).send(filteredProducts)
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
})

// exercicio 6
app.delete("/product/delete/:id", (req: Request, res: Response) => {
  try {

    const id: string = req.params.id;

    const filteredList = products.filter((product: Product) => {
      return product.id !== id
    })

    res.status(200).send(filteredList)
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
})

// exercicio 7
app.post("/products/refactored/create", (req: Request, res: Response) => {

  try {
    const id: string = req.body.id;
    const name: string = req.body.name;
    const price: number = req.body.price;

    if (price === 0) throw new Error("Preço tem que ser maior que zero")

    if (!id || !name || !price) throw new Error("Tente novamente, algum dado está faltando");

    if (typeof id !== typeof "") throw new Error("id precisa ser uma string");
    if (typeof name !== typeof "") throw new Error("name precisa ser uma string");
    if (typeof price !== typeof 0) throw new Error("price precisa ser um number");

    const product: Product = {
      id,
      name,
      price
    }

    products.push(product);

    res.status(200).send(products)
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
})

// exercicio 8
app.put(`/product/refactored/update/:id`, (req: Request, res: Response) => {
  try {

    const id: string = req.params.id;
    const price: number = req.body.price;
    const product = products.filter((product: Product) => {
      return product.id === id
    })

    if (product.length === 0) throw new Error("Produto não encontrado!");

    if (price === 0) throw new Error("Preço tem que ser maior que zero")

    if (!price) throw new Error("Tente novamente, preço está faltando");

    if (typeof price !== typeof 0) throw new Error("price precisa ser um number");

    const filteredProducts = products.filter((product: Product) => {
      if (product.id === id) {
        return product.price = price
      }
      return product;
    })

    res.status(200).send(filteredProducts)
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
})

// exercicio 9
app.delete("/product/refactored/delete/:id", (req: Request, res: Response) => {
  try {

    const id: string = req.params.id;

    const product = products.filter((product: Product) => {
      return product.id === id
    })

    if (product.length === 0) throw new Error("Produto não encontrado!");

    const filteredList = products.filter((product: Product) => {
      return product.id !== id
    })

    res.status(200).send(filteredList)
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
})