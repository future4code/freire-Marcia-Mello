import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, useProtectedPage } from '../Router/coorditator'
import axios from 'axios'
import { baseUrl } from '../utils/api-data'

function TripDetailsPage() {
  const [trip, setTrip] = useState({})

  const navigate = useNavigate();

  useProtectedPage(navigate);

  useEffect(() => {
    handleGetTripDetails()
    // eslint-disable-next-line
  }, [])

  const tripDetails = JSON.parse(localStorage.getItem('trip'));
  const token = JSON.parse(localStorage.getItem("token"))

  const handleGetTripDetails = async () => {

    if (tripDetails) {
      try {
        const response = await axios.get(`${baseUrl}/trip/${tripDetails.id}`, {
          headers: {
            auth: token
          }
        })

        if (response.status === 200) {
          setTrip(response.data.trip)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleApproveCandidate = async (candidate, approve) => {
    const body = {
      approve: approve
    }

    try {
      const response = await axios.put(`${baseUrl}/trips/${tripDetails.id}/candidates/${candidate.id}/decide`, body, {
        headers: {
          auth: token
        }
      })

      if (response.status === 200) {
        window.alert(approve ? `Usuário ${candidate.name} aprovado para a viagem!` : `Usuário ${candidate.name} reprovado para a viagem!`)
        handleGetTripDetails()
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(trip)
  return (
    <div>
      <h1>Detalhes da Viagem</h1>
      <section className="buttons-container">
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </section>
      {
        trip.name && <>
          <h2>Viagem</h2>
          <section className="trip-details-card">
            <p><b>Nome:</b> {trip.name}</p>
            <p><b>Descrição:</b> {trip.description}</p>
            <p><b>Planeta:</b> {trip.planet}</p>
            <p><b>Duração:</b> {trip.durationInDays}</p>
            <p><b>Data da Viagem:</b> {trip.date}</p>
          </section>
        </>
      }
      <section className='candidates-container'>
        {trip.candidates && trip.candidates.length > 0 && <h2>Candidatos</h2>}
        {trip.candidates && trip.candidates.map((candidate) => {
          return <div key={candidate.id} className="candidate-card">
            <p><b>Nome: </b> {candidate.name}</p>
            <p><b>Idade: </b> {candidate.age}</p>
            <p><b>Profissão: </b>{candidate.profession}</p>
            <p><b>País:</b> {candidate.country}</p>
            <p><b>Texto de Candidatura:</b> {candidate.applicationText}</p>

            <section>
              <button onClick={() => handleApproveCandidate(candidate, false)}>Rejeitar</button>
              <button onClick={() => handleApproveCandidate(candidate, true)}>Aprovar</button>
            </section>
          </div>
        })}
      </section>
    </div>
  )
}

export default TripDetailsPage;