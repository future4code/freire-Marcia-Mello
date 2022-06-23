import React, { Component } from 'react'

// components
import ListaDeUsuarios from './pages/listaDeUsuarios';
import Home from './pages/home';

class App extends Component {
  state = {
    pagina: "home"
  }

  handleChangePagina = () => {
    const { pagina } = this.state

    if (pagina === "home") {
      return <Home/>
    } else {
      return <ListaDeUsuarios/>
    }
  }

  handleTrocarPagina = () => {
    const { pagina } = this.state

    if (pagina === "home") {
      this.setState({
        pagina: "detalhes"
      })
    } else (
      this.setState({
        pagina: "home"
      })
    )
  }

  render() {
    const pagina = this.handleChangePagina()

    return (
      <div>
        <button onClick={this.handleTrocarPagina}>Trocar página</button>
        {pagina}
      </div >
    )
  }
}

export default App
