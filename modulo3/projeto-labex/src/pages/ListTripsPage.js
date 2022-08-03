import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationPage } from '../Router/coorditator'
import axios from 'axios';
import { baseUrl } from '../utils/api-data';

function ListTripsPage() {
  const [trips, setTrips] = useState([])

  const navigate = useNavigate()

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
      return <div key={trip.id} className="trip-details-card">
        <h4>Nome: {trip.name}</h4>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data da Viagem: {trip.date}</p>
      </div>
    })

    return tripList
  }

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <section className="buttons-container">
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationPage(navigate)}>Inscrever-se</button>
      </section>
      <section>
        {handleRenderTrips()}
      </section>
    </div>
  )
}

export default ListTripsPage