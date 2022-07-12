import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Router/coorditator'

function TripDetailsPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h3>TripDetailsPage</h3>

      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default TripDetailsPage