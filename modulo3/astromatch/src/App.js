import React from 'react'
import styled from 'styled-components'
import AstroCard from './components/AstroCard'

const AppContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornsilk;
`

function App() {

  return (
    <AppContainer>
      <AstroCard/>
    </AppContainer>
  )
}

export default App