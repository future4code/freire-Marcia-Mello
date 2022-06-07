import React from 'react';
import "./styles.css"

function CardPequeno(props) {
  return (
    <div className='card-pequeno-container'>
        <img src={props.imagem} alt={props.textoImagem}/>
        <b>{props.titulo}:</b>
        <p>{props.texto}</p>
    </div>
  )
}

export default CardPequeno