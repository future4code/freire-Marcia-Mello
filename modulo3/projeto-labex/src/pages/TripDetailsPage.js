import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, useProtectedPage } from '../Router/coorditator'

function TripDetailsPage() {
  const navigate = useNavigate();

  useProtectedPage(navigate);
  
  useEffect(() => {

  }, [])


  return (
    <div>
      <h3>TripDetailsPage</h3>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default TripDetailsPage;