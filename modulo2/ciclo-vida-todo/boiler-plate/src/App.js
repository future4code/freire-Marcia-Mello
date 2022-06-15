import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  min-width: 200px;
`

const Tarefa = styled.li`
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  border: 1px solid #0e0e0e;
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  
  button {
    height: 100%;
    margin: 0 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-left: 1px solid #0e0e0e;
    cursor: pointer;
    background-color: transparent;
    svg {
      transition: all 0.3s ease;
    }

    &:hover svg {
      fill: red;
    }
  }
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;

  button {
    cursor: pointer;
  }
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate(prevProps, prevState) {
    // const { tarefas } = this.state

    // if(prevState !== tarefas){
    //   this.salvarNoLocalStorage(tarefas)
    // }
  };

  componentDidMount() {
    const tarefasSalvas = this.buscarNoLocalStorage("tarefas");

    if (!tarefasSalvas) {
      return
    } else {
      this.setState({
        tarefas: JSON.parse(tarefasSalvas)
      })
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onKeyDown = (event) => {
    if (event.key === "Enter") {
      this.criaTarefa()
    }
  }

  buscarNoLocalStorage = (item) => {
    return window.localStorage.getItem(item);
  }

  salvarNoLocalStorage = (item) => {
    window.localStorage.setItem("tarefas", JSON.stringify(item))
  }

  criaTarefa = () => {
    const { tarefas, inputValue } = this.state

    if (inputValue === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: inputValue,
      completa: false
    }

    const copiaTarefas = [...tarefas, novaTarefa]

    this.salvarNoLocalStorage(copiaTarefas)

    this.setState({
      tarefas: copiaTarefas,
      inputValue: ""
    })
  }

  selectTarefa = (id) => {
    const { tarefas } = this.state

    const novaListaDeTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }

        return novaTarefa;
      } else {
        return tarefa
      }
    })

    this.salvarNoLocalStorage(novaListaDeTarefas)

    this.setState({
      tarefas: novaListaDeTarefas
    })
  }

  removerTarefa = (id) => {
    const { tarefas } = this.state

    const novaListaDeTarefas = tarefas.map((tarefa, index) => {
      if (tarefa.id === id) {
        return tarefas.splice(index, 1)
      } else {
        return tarefa
      }
    })

    this.salvarNoLocalStorage(novaListaDeTarefas)

    this.setState({
      tarefas: novaListaDeTarefas
    })
  }

  limparTarefasConcluidas = () => {
    const { tarefas } = this.state

    const tarefasCompletas = tarefas.filter(tarefa => {
      return tarefa.completa !== true
    })   

    this.salvarNoLocalStorage(tarefasCompletas)

    this.setState({
      tarefas: tarefasCompletas
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const tarefasFiltradas = this.state.tarefas.filter(tarefa => {
      return tarefa.completa === true
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyDown={this.onKeyDown} />
          <button onClick={this.criaTarefa}>tarefa</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          {tarefasFiltradas.length !== 0  && <button onClick={this.limparTarefasConcluidas}>Limpar tarefas completas</button>}
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                key={tarefa.id}
              >
                {tarefa.texto}
                <button onClick={() => this.removerTarefa(tarefa.id)}>
                  <svg fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                  </svg>
                </button>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App