import axios from "axios"
import { BASE_URL } from "../constants/urls"

const token = window.localStorage.getItem('token');

const headers = {
    headers: {
        Authorization: token
    }
}

export const getPosts = async (size = 10) => {

    try {
        const response = await axios.get(`${BASE_URL}/posts?size=${size}`, headers);
        return response.data;

    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const createPost = async (body, clear, getPosts) => {

    try {
        await axios.post(`${BASE_URL}/posts`, body, headers);
        clear()
        getPosts()

        console.log("Post Criado")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const getComments = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`, headers);
        return response.data;

    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const createComment = async (body, clear, postId, getComments) => {

    try {
        await axios.post(`${BASE_URL}/posts/${postId}/comments`, body, headers);
        clear()
        getComments()

        console.log("Comentario Criado")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const votePost = async (getPosts, postId) => {

    const body = {
        direction: 1
    }

    try {
        await axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers);
        getPosts()

        console.log("Voto Concluido")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const unVotePost = async (getPosts, postId) => {

    const body = {
        direction: -1
    }

    try {
        await axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers);
        getPosts()

        console.log("Voto Concluido")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const voteComment = async (getComments, postId) => {

    const body = {
        direction: 1
    }

    try {
        await axios.post(`${BASE_URL}/comments/${postId}/votes`, body, headers);
        getComments()

        console.log("Voto Concluido")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const unVoteComment = async (getComments, postId) => {

    const body = {
        direction: -1
    }

    try {
        await axios.post(`${BASE_URL}/comments/${postId}/votes`, body, headers);
        getComments()

        console.log("Voto Concluido")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}