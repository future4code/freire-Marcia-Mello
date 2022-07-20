import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationPage } from '../Router/coorditator'

function ListTripsPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>ListTripsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationPage(navigate) }>Viagem pra lua</button>
    </div>
  )
}

export default ListTripsPage