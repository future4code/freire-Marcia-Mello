import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage, useProtectedPage } from '../Router/coorditator';
import axios from 'axios';
import { baseUrl } from '../utils/api-data';

function CreateTripPage() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState(0);

  const navigate = useNavigate()
  useProtectedPage(navigate);

  const handleCriarViagem = async () => {

    const token = localStorage.getItem("token")

    const body = {
      name,
      planet,
      date,
      description,
      durationInDays
    }

    try {
      if (token) {
        const response = await axios.post(`${baseUrl}/trips`, body, {
          headers: {
            auth: JSON.parse(token)
          }
        });

        if (response.status === 200) {
          window.alert("Viagem criada com sucesso!")
          goToAdminHomePage(navigate);
        }
      }
    } catch (error) {
      window.alert("Houve um erro. Revise os dados da viagem.")
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Criar Viagem</h1>
      <section className="buttons-container">
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </section>

      <section className='form'>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome" />
        <input value={planet} onChange={(event) => setPlanet(event.target.value)} placeholder="Planeta" />
        <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Data" />
        <input value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Descrição" />
        <input value={durationInDays} onChange={(event) => setDurationInDays(event.target.value)} placeholder="Duração em Dias" />
        <button onClick={() => handleCriarViagem()}>Criar</button>
      </section>
    </div>
  )
}

export default CreateTripPage