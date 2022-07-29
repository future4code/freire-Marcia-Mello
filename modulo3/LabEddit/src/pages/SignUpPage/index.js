import React from 'react'

// routes
import { goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

// assets
import Brand from '../../assets/icons/brand.svg';

// styles
import { LogoImage, ScreenContainer, SignUpButtonContainer, StyledButton } from './styled';
import SignUpForm from './form';

const SignUpPage = () => {
  const navigate = useNavigate()

  return (
    <ScreenContainer>
      <LogoImage src={Brand} alt='logotipo' />
      <p>O projeto de rede social da Labenu </p>
      <SignUpForm/>
      <SignUpButtonContainer>
        <StyledButton
          onClick={() => goToLogin(navigate)}
          fullWidth
          color="secundary"
          variant="contained"
          margin="normal"
        >
          Login
        </StyledButton>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default SignUpPage;