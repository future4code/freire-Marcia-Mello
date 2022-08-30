import axios from "axios"
import { baseURL } from "./baseURL"

type New = {
  title: string;
  content: string;
  date: number;
}

type User = {
  id: string;
  name: string;
  email: string;
}

const news: New = {
  title: "Nova notícia",
  content: "conteúdo",
  date: Date.now()
}

const createNews = (news: any) => {}

// a função por não ser void precisa retornar algo 
// const getAllSubscribers = async (): Promise<user[]> => {}

const getSubscribersIds = (subscribers: any) => {}
// b 


// c
const getSubscribers = async (): Promise<User[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const notifyAllSubscribers = () => {}

// createNews(news)                // criar noticia
//   .then(getAllSubscribers)      // buscar assinantes
//   .then(getSubscribersIds)      // extrair id's (etapa síncrona)
//   .then(notifyAllSubscribers)   // enviar notificacoes