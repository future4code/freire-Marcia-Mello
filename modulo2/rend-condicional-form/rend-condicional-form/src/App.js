import React, { Component } from 'react'
import Etapa1 from './components/etapa1'
import Etapa2 from './components/etapa2'
import Etapa3 from './components/etapa3'
import Final from './components/final'
import { EtapaContainer, MainContainer } from './global-style'

class App extends Component {
  state = {
    etapa: 1
  }

  voltarEtapa = () => {
    const { etapa } = this.state

    if(etapa > 1 && etapa <= 4) {
      this.setState({
        etapa: etapa - 1
      })
    }
  }

  avancarEtapa = () => {
    const { etapa } = this.state

    if(etapa >= 1 && etapa < 4) {
      this.setState({
        etapa: etapa + 1
      })
    }
  }

  reiniciarFormulario = () => {
    this.setState({
      etapa: 1
    })
  }

  render() {
    const { etapa } = this.state

    let renderizarPagina = <Etapa1/>

    if(etapa === 1) {
      renderizarPagina = <Etapa1/>
    } else if (etapa === 2){
      renderizarPagina = <Etapa2/>
    } else if (etapa === 3) {
      renderizarPagina = <Etapa3/>
    } else if (etapa === 4) {
      renderizarPagina = <Final/>
    }

    return (
      <MainContainer>
        <EtapaContainer>
          {renderizarPagina}
        </EtapaContainer>
        {etapa !== 1 && etapa !== 4 && <button onClick={this.voltarEtapa}>Voltar etapa</button>}
        {etapa !== 4 && <button onClick={this.avancarEtapa}>Próxima etapa</button>}
        {etapa === 4 && <button onClick={this.reiniciarFormulario}>Reiniciar Formulário</button>}
      </MainContainer>
    )
  }
}

export default App;