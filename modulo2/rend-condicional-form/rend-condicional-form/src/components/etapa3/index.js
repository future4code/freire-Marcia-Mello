import React from 'react'

function Etapa3() {
  return (
    <>
      <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
      <label for="terminou-graduacao">7. Por que você não terminou um curso de graduação?</label>
      <input name='terminou-graduacao' />
      <label for="curso-complementar">8. Você fez algum curso complementar?</label>
      <select name='curso-complementar'>
        <option>Nenhum</option>
        <option>Curso técnico</option>
        <option>Curso de inglês</option>
      </select>
    </>
  )
}

export default Etapa3;