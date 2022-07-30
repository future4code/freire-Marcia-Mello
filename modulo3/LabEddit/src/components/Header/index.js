import React from 'react';

// routes
import { useNavigate } from "react-router-dom"
import { goToFeed, goToLogin } from '../../routes/coordinator';

// material-ui
import { Button, AppBar } from '@material-ui/core'

// assets
import Logo from '../../assets/icons/logo.svg'
import CloseIcon from '../../assets/icons/close-icon.svg'

// styles
import { StyledToolbar, LogoImage } from './styled'

const Header = () => {
    const navigate = useNavigate()

    const route = window.location.pathname;
    const post = JSON.parse(window.localStorage.getItem('post')) || {}

    const handleCheckPost = () => {
        const transformPost = Object.keys(post) || {};
        if(transformPost.length === 0) return

        return `/post/${post.id}`
    }

    const handleRenderButton = () => {
        if (route === '/' || route === "/cadastro") {
            return
        } else {
            return <Button onClick={() => handleLogout()} color="primary">Logout</Button>
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        goToLogin(navigate)
    }

    const handleGoBack = () => {
        window.localStorage.removeItem("post")

        goToFeed(navigate)
    }

    return (
        <AppBar position="static" color="secondary">
            <StyledToolbar>
                { route === handleCheckPost() && <LogoImage src={CloseIcon} alt='fechar' onClick={handleGoBack} className="close-icon"/>}
                <LogoImage src={Logo} alt='logotipo' />
                {handleRenderButton()}
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;