import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack, goToAdminHomePage } from '../Router/coorditator';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const body = {
      email,
      password
    }

    try {
      const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcia/login`, body)

      window.localStorage.setItem("token", JSON.stringify(response.data.token))

      if(response.status === 200){
        goToAdminHomePage(navigate)
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h3>LoginPage</h3>

      <button onClick={() => goBack(navigate)}>Voltar</button>
      <input placeholder='Email' type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input placeholder='Senha' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button onClick={() => handleLogin()}>Logar</button>
    </div>
  )
}

export default LoginPage;