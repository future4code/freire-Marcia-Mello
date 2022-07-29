import React, { useEffect } from 'react'

// routes
import { goToFeed, goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

// assets
import Brand from '../../assets/icons/brand.svg';

// styles
import { LogoImage, ScreenContainer, LoginButtonContainer, StyledButton } from './styled';

// components
import LoginForm from './form';

const LoginPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if(token) goToFeed(navigate)

  },[])

  return (
    <ScreenContainer>
      <LogoImage src={Brand} alt='logotipo' />
      <p>O projeto de rede social da Labenu </p>
      <LoginForm/>
      <LoginButtonContainer>
        <StyledButton
          onClick={() => goToSignUp(navigate)}
          fullWidth
          color="secundary"
          variant="contained"
          margin="normal"
        >
          Cadastrar
        </StyledButton>
      </LoginButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage;