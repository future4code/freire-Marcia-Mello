import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Router/coorditator'
import axios from 'axios';
import { baseUrl } from '../utils/api-data';

function ApplicationFormPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    handleGetTrips()
  }, [])

  const handleGetTrips = async () => {
    try {
      console.log(`${baseUrl}/trips`)
      const response = await axios.get(`${baseUrl}/trips`);

      setTrips(response.data.trips)

    } catch (error) {
      console.log(error)
    }
  }

  const handleEnviarInscricao = async () => {
    const body = {
      name,
      age,
      applicationText,
      profession,
      country
    }

    try {

      const response = await axios.post(`${baseUrl}/trips/${trip}/apply`, body)

      if (response.status === 200) {
        window.alert(`Inscrição concluida com sucesso!`)
        goBack(navigate);
      }
    } catch (error) {
      window.alert("Porfavor, revise os seus dados para fazer a inscrição.")
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Inscrição</h1>
      <section className="buttons-container">
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </section>

      <section className='form'>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome" />
        <input value={age} onChange={(event) => setAge(event.target.value)} placeholder="Idade" />
        <input value={applicationText} onChange={(event) => setApplicationText(event.target.value)} placeholder="Texto" />
        <select value={trip} onChange={(event) => setTrip(event.target.value)}>
          <option value="">Nenhum Selecionado</option>
          {trips && trips.map((trip) => {
            return <option key={trip.id} value={trip.id}>{trip.name}</option>
          })}
        </select>
        <input value={profession} onChange={(event) => setProfession(event.target.value)} placeholder="Profissão" />
        <input value={country} onChange={(event) => setCountry(event.target.value)} placeholder="País" />

        <button onClick={() => handleEnviarInscricao()}>Inscrever-se</button>
      </section>
    </div>
  )
}

export default ApplicationFormPage