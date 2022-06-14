import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.form`
  width: 280px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 20px;
  box-shadow: 0 1px 5px #0e0e0e;
  margin: 20px 0;

  input {
    width: 80%;
    height: 40px;
    padding: 0 10px;
    margin: 0 0 20px;
  }

  button {
    width: 60%;
    height: 40px;
    border: 0;
    background-color: #0e0e0e;
    color: #FFFFFF;
    border-radius: 5px;
  }
`

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Márcia",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nome: "Paulinha",
        fotoUsuario: "https://picsum.photos/45/50",
        fotoPost: "https://picsum.photos/157/150"
      },
      {
        nome: "Joãozinho",
        fotoUsuario: "https://picsum.photos/48/50",
        fotoPost: "https://picsum.photos/198/150"
      },
      {
        nome: "Pedrinho",
        fotoUsuario: "https://picsum.photos/46/50",
        fotoPost: "https://picsum.photos/196/150"
      }
    ],

    valorInputPessoa: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  
  adicionaPessoa = (event) => {
    event.preventDefault()
    const { posts, valorInputFotoPost, valorInputFotoUsuario, valorInputPessoa } = this.state;

    const novaPost = {
      nome: valorInputPessoa,
      fotoUsuario: valorInputFotoUsuario,
      fotoPost: valorInputFotoPost
    };

    const copiaPosts = [...posts, novaPost]

    this.setState({ posts: copiaPosts });

  };

  onChangeInputPessoa = (event) => {

    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {

    this.setState({ valorInputFotoUsuario: event.target.value });

  };

  onChangeInputFotoPost = (event) => {

    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {
    const { posts } = this.state;

    const listaPosts = (
      posts.map((post, index) => {
        return <Post
          key={index}
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      })
    )

    return (
      <MainContainer>
        <FormContainer onSubmit={this.adicionaPessoa} >
          <h4>Formulário de criação de post</h4>
          <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder="Nome do usuário"
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder="Foto do usuário"
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder="Foto do Post"
          />
          <button type='submit'>Criar</button>
        </FormContainer>
        {listaPosts}
      </MainContainer>
    );
  }
}

export default App;
