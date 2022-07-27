import React from "react"
import logo from '../../assets/logo.png'
import {ScreenContainer} from './styled'
import SignUpForm from './SignUpForm'
import {LogoImage} from './styled'

const SignUpPage = () => {
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm/>
        </ScreenContainer>
    )
}

export default SignUpPage


