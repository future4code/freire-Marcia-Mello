import { useEffect } from "react"


export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const useProtectedPage = (navigate) => {

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            console.log('Não está logado!!!')
            goToLogin(navigate)
        }
    }, [navigate])
}