import React from 'react'

function Etapa1() {
  return (
    <>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <label for="nome">1. Qual o seu nome?</label>
        <input name='nome'/>
        <label for="idade">2. Qual a sua idade?</label>
        <input name='idade'/>
        <label for="email">3. Qual o seu email?</label>
        <input name='email'/>
        <label for="escolaridade">4. Qual a sua escolaridade?</label>
        <select name='escolaridade'>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
    </>
  )
}

export default Etapa1;