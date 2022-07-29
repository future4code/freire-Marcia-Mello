import React from 'react';

// routes
import { useNavigate } from "react-router-dom"
import { goToLogin } from '../../routes/coordinator';

// material-ui
import { Button, AppBar } from '@material-ui/core'

// assets
import Logo from '../../assets/icons/logo.svg'

// styles
import { StyledToolbar, LogoImage } from './styled'

const Header = () => {
    const navigate = useNavigate()

    const route = window.location.pathname;

    const handleRenderButton = () => {
        if(route === '/' || route === "/cadastro"){
            return
        } else {
            return <Button onClick={() => handleLogout()} color="primary">Logout</Button> 
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        goToLogin(navigate)
    }

    return (
        <AppBar position="static" color="secondary">
            <StyledToolbar>
                <LogoImage src={Logo} alt='logotipo'/>
                {handleRenderButton()}
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;