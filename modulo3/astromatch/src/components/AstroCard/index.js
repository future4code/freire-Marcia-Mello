import React, { useEffect, useState } from 'react'
import axios from "axios";
import { AstroCardContainer } from './styles';

function AstroCard() {
    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        // pegarPerfil()
    })

    const pegarPerfil = async () => {
        try {
            const result = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcia/person");

            setPerfil(result.data.profile)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AstroCardContainer>
            <header>

            </header>
            <section>
                <img src={perfil.photo} alt="imagem" />
                <section className='card-information'>
                    <h2>{perfil.name}, {perfil.age}</h2>
                    <p>{perfil.bio}</p>
                    <p>{perfil.photo_alt}</p>
                </section>
            </section>
            <button onClick={() => pegarPerfil()}>pegar perfil</button>
            <button onClick={() => matches ()}>matches</button>
            <button onClick={() => descarte()}>descarte</button>
        </AstroCardContainer>
    )
}

export default AstroCard;