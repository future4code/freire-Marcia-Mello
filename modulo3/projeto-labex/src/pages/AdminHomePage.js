import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToTripDetailsPage, goBack, goToCreateTripPage } from '../Router/coorditator';

function AdminHomePage() {
  const [ viagem ] = useState({
    id: "netuno_3021",
    nome: "Viagem para Netuno"
  })

  const navigate = useNavigate();
  
  const handleVerDetalhes = (id) => {
    goToTripDetailsPage(navigate, id)
  }
  
  return (
    <div>
      <h3>AdminHomePage</h3>

      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => handleVerDetalhes(viagem.id)}>{viagem.nome}</button>
    </div>
  )
}

export default AdminHomePage