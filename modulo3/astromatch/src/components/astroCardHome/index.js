import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, nomeAluno } from '../../dadosApi';
import { DismatchButton, ImageBackground, MatchButton } from '../styles';
import AddIcon from '@mui/icons-material/Add';

function AstroCardHome() {
    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        pegarPerfil()
    }, []);

    const pegarPerfil = async () => {
        try {
            const response = await axios.get(`${baseUrl}/astroMatch/${nomeAluno}/person`);

            setPerfil(response.data.profile)
        } catch (error) {
            console.log(error)
        }
    }

    const darMatch = async (id) => {
        const body = {
            id,
            choice: true
        }

        try {
            await axios.post(`${baseUrl}/astroMatch/${nomeAluno}/choose-person`, body)
            pegarPerfil()
        } catch (error) {
            console.log(error)
        }
    }

    const rejeitarMatch = async (id) => {
        const body = {
            id,
            choice: false
        }

        try {
            await axios.post(`${baseUrl}/astroMatch/${nomeAluno}/choose-person`, body)
            pegarPerfil()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <ImageBackground image={perfil.photo}>
                <div>
                    <h4>{perfil.name}, <span>{perfil.age}</span></h4>
                    <p>{perfil.bio}</p>
                </div>
            </ImageBackground>
            <DismatchButton onClick={() => rejeitarMatch(perfil.id)}><AddIcon /></DismatchButton>
            <MatchButton onClick={() => darMatch(perfil.id)}>♥️</MatchButton>
        </>
    )
}

export default AstroCardHome