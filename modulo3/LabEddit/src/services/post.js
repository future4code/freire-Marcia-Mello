import axios from "axios"
import { BASE_URL } from "../constants/urls"

const token = window.localStorage.getItem("token");

const headers = {
    headers: {
        Authorization: token
    }
}

export const getPosts = async () => {

    try {
        const response = await axios.get(`${BASE_URL}/posts`, headers);
        return response.data;

    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const createPost = async (body, clear) => {

    try {
        await axios.post(`${BASE_URL}/posts`, body, headers);
        clear()
        getPosts()

        console.log("Post Criado")
    } catch (error) {
        alert(`erro: ${error}`)
    }
}

export const votePost = async (postId, direction, userVoteDirection) => {
    if (userVoteDirection === direction) {

        const upVote = {
            direction: 1
        }

        try {
            await axios.post(`${BASE_URL}/posts/${postId}/votes`, upVote, headers)


        } catch (error) {

            window.alert("Ocorreu um erro, tente novamente")

        }
    } else {

        const downVote = {
            direction: -1
        }

        try {
            await axios.put(`${BASE_URL}/posts/${postId}/votes`, downVote, headers)

        } catch (error) {

            window.alert("Ocorreu um erro, tente novamente")
        }
    }
}