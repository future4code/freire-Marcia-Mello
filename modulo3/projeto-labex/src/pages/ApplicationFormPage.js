import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../Router/coorditator'

function ApplicationFormPage() {
  const navigate = useNavigate()

  const handleEnviarInscricao = () => {
    goToHomePage(navigate);
  }

  return (
    <div>
      <h3>ApplicationFormPage</h3>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => handleEnviarInscricao()}>Inscrever-se</button>
    </div>
  )
}

export default ApplicationFormPage