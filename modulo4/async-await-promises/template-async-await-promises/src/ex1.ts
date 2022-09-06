import axios from "axios"
import { baseURL } from "./baseURL"

axios.get(`${baseURL}/subscribers`)

// a- https://labenews.herokuapp.com/ subscribers
// b- any[]
// c- 
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
   return response.data;
 };
