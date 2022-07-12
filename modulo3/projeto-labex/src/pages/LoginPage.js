import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack, goToAdminHomePage } from '../Router/coorditator';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    goToAdminHomePage(navigate)
  }

  return (
    <div>
      <h3>LoginPage</h3>

      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => handleLogin()}>Logar</button>
    </div>
  )
}

export default LoginPage;