import React from 'react';
import styled from 'styled-components'
import BalaoConversa from './components/balaoConversa';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .whats-container {
    min-height: 80%;
    width: 500px;
    box-sizing: border-box;
    box-shadow: 0 1px 5px #0e0e0e;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: lightcyan 
  }

  .container-mensagens {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    
  }
`

const FormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #0e0e0e;
  input {
    width: 40%;
    height: 25px;
    padding: 0 10px;
  }

  input:first-child{
    width: 20%;
  }
  button {
    width: 20%;
    height: 100%;
    border: 0;
    background-color: #0e0e0e;
    color: #FFFFFF;
    border-radius: 5px;
  }
`

class App extends React.Component {
  state = {
    mensagens: [],

    valorInputNome: "",
    valorInputMensagem: ""
  };

  enviarMensagem = (event) => {
    event.preventDefault()
    const { mensagens, valorInputNome, valorInputMensagem } = this.state;

    const novaMensagem = {
      nome: valorInputNome,
      mensagem: valorInputMensagem
    };

    const copiaMensagens = [...mensagens, novaMensagem]

    this.setState({ mensagens: copiaMensagens });

    this.setState({
      valorInputNome: "",
      valorInputMensagem: ""
    })

  };

  onChangeInputNome = (event) => {

    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {

    this.setState({ valorInputMensagem: event.target.value });

  };

  render() {
    const { mensagens, valorInputNome, valorInputMensagem } = this.state;

    const listaPosts = (
      mensagens.map((mensagem, index) => {
        return <BalaoConversa key={index}
          nome={mensagem.nome}
          mensagem={mensagem.mensagem}
        />
      })
    )

    return (
      <MainContainer>
        <div className='whats-container'>
          <div className='container-mensagens'>
            {listaPosts}
          </div>
          <FormContainer onSubmit={this.enviarMensagem} >
            <input
              value={valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder="Usuário"
            />
            <input
              value={valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder="Mensagem"
            />
            <button type='submit'>enviar</button>
          </FormContainer>
        </div>
      </MainContainer>
    );
  }
}

export default App;
