import { useEffect } from "react";

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goSignUp = (navigate) => {
    navigate("/cadastro")
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