import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage, useProtectedPage } from '../Router/coorditator';

function CreateTripPage() {
  const navigate = useNavigate()
  useProtectedPage(navigate);

  const handleCriarViagem = () => {
    goToAdminHomePage(navigate);
  }

  return (
    <div>
      <h3>CreateTripPage</h3>

      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => handleCriarViagem()}>Criar</button>
    </div>
  )
}

export default CreateTripPage