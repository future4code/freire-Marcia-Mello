import React, { useState, useEffect } from 'react';
import { DetailsContainer, ProfileContainer } from '../styles';
import axios from 'axios';
import { baseUrl, nomeAluno } from '../../dadosApi';

function AstroCardDetalhes() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    pegarMatches()
  }, []);

  const pegarMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/astroMatch/${nomeAluno}/matches`);

      setMatches(response.data.matches)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLimparMatches = async () => {
    try {
      await axios.put(`${baseUrl}/astroMatch/${nomeAluno}/clear`)

      pegarMatches()
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <DetailsContainer>
      {
        matches && matches.map((match) => {
          return <ProfileContainer>
            <img src={match.photo} alt={match.name} />
            <p>{match.bio}</p>
          </ProfileContainer>
        })
      }
      <button onClick={() => handleLimparMatches()}>Limpar matches</button>
    </DetailsContainer>
  )
}

export default AstroCardDetalhes