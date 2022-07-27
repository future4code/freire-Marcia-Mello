import React from "react"
import {ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import {useNavigate} from 'react-router-dom';
import {goToSignUp} from "../../routes/coordinator"

const LoginPage = () => {
  const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
             <SignUpButtonContainer>
                <Button
                         onClick={() => goToSignUp(navigate)}
                         type={"submit"}
                         fullwidth
                         variant={"text"}
                         color={"primary"}
                    >
                        Não possui conta? Cadastre-se
                        </Button>     

             </SignUpButtonContainer>
           
        </ScreenContainer>
    )
}

export default LoginPage