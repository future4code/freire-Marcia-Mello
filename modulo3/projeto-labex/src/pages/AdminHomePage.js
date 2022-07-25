import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToTripDetailsPage, goToCreateTripPage, goToHomePage, useProtectedPage, goToAdminPage } from '../Router/coorditator';
import axios from 'axios';
import { baseUrl } from '../utils/api-data';

function AdminHomePage() {
  const [trips, setTrips] = useState([])

  const navigate = useNavigate();

  useProtectedPage(navigate);

  useEffect(() => {
    handleGetTrips()
  }, [])

  const handleGetTrips = async () => {
    try {
      const response = await axios.get(`${baseUrl}/trips`);

      setTrips(response.data.trips)

    } catch (error) {
      console.log(error)
    }
  }

  const handleRenderTrips = () => {

    const tripList = trips && trips.map((trip) => {
      return <div key={trip.id} onClick={() => handleVerDetalhes(trip)} className="admin-trip-card">
        <h4>{trip.name}</h4>
      </div>
    })

    return tripList
  }

  const handleVerDetalhes = (trip) => {
    window.localStorage.setItem("trip", JSON.stringify(trip))

    goToTripDetailsPage(navigate, trip.id)
  }

  const handleLogout = () => {
    window.localStorage.removeItem("token")

    goToAdminPage(navigate)
  }

  return (
    <div>
      <h1>Administração</h1>
      <section className="buttons-container">
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={() => handleLogout(navigate)}>Logout</button>
      </section>
      {handleRenderTrips()}
    </div>
  )
}

export default AdminHomePage