import React from 'react'
import { Button, AppBar } from '@mui/material'
import { goToSignUp, goToPost } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"
import { StyledToolbar } from './styled'



const Header = () => {
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToSignUp(navigate)} color="inherit">Entrar</Button>
                <Button onClick={() => goToPost(navigate)} color="inherit">Logout</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header