import {api} from './api'

const header =  {
    headers: {
        Authorization: "marcia-mello-freire"
    }
}        

// get requests
export const getAllUsers = async () => {
    try {
        const response = await api.get("/users", header)

        return response.data
    } catch (error) {   
        console.log(error)
    }
}

export const getUserById = async (id) => {
    try {
        const response = await api.get(`/users/${id}`, header)

        return response.data
    } catch (error) {   
        console.log(error)
    }
}

export const searchUsers = async (name, email) => {
    try {
        const response = await api.get(`/users/search?name=${name}&email=${email}`, header)

        return response.data
    } catch (error) {   
        console.log(error)
    }
}

// post requests
export const createUser = async (name, email) => {

    const body = {
        name, 
        email
    }

    try {
        await api.post("/users", body, header)
        
        return alert("Usuário criado com sucesso!")
    } catch (error) {   
        return alert("Usuário existente! Tente outro nome ou email.")
    }
}

// put requests
export const editUser = async (id, name, email) => {

    const body = {
        name, 
        email
    }

    try {
        await api.put(`/users/${id}`, body, header) 

        return alert("Usuário editado com sucesso!")
    } catch (error) {   
        return alert("Usuário existente! Tente outro nome ou email.")
    }
}

// delete requests
export const deleteUser = async (id) => {

    const question = window.confirm("Deseja deletar esse usuário?")

    if(!question) return;

    try {
        await api.delete(`/users/${id}`, header)

        return alert("Usuário deletado com sucesso!")
    } catch (error) {   
        return alert("Houve um erro ao tentar deletar o usuário!")
    }
}