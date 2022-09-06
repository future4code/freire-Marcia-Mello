import axios from "axios"
import { baseURL } from "./baseURL"

axios.get(`${baseURL}/subscribers/idInvalido/notifications`)

// a- a função nomeada não usa const e nem o sinal de arrow function

// b-
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

 