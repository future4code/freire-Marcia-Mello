import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToAdminHomePage, goToHomePage } from '../Router/coorditator';
import axios from 'axios';
import { baseUrl } from '../utils/api-data';

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      goToAdminHomePage(navigate)
    }
  }, [navigate])

  const handleLogin = async () => {
    const body = {
      email,
      password
    }

    try {
      const response = await axios.post(`${baseUrl}/login`, body)

      window.localStorage.setItem("token", JSON.stringify(response.data.token))

      if (response.status === 200) {
        window.alert("Usuário logado com sucesso!")
        goToAdminHomePage(navigate)
      }
    } catch (error) {
      window.alert("E-mail ou senha errados.")
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <section className="buttons-container">
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      </section>

      <section className='form'>
        <input placeholder='Email' type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input placeholder='Senha' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button onClick={() => handleLogin()}>Logar</button>
      </section>
    </div>
  )
}

export default LoginPage;