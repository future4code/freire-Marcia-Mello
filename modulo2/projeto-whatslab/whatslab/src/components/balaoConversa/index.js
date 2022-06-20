import React from 'react'
import {BalaoContainer} from './styled.js'

function BalaoConversa({nome, mensagem}) {
  return (
    <BalaoContainer>
        <h4>{nome}: </h4>
        <p>{mensagem}</p>
    </BalaoContainer>
  )
}

export default BalaoConversa