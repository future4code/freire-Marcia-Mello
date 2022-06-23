import React, { Component } from 'react'

// requests
import { createUser } from '../../utils/requests'

class Home extends Component {
    state = {
        name: "",
        email: ""
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnSubmit = async () => {
        const { name, email } = this.state;

        await createUser(name, email)

        this.handleClearFields()
    }

    handleClearFields = () => {
        this.setState({
            name: "",
            email: ""
        })
    }

    render() {
        const { name, email } = this.state;
        
        return (
            <div>
                <h2>Cadastrar usuários</h2>
                <input
                    placeholder='Nome'
                    type="text"
                    value={name}
                    onChange={this.handleOnChangeName}
                />
                <input
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={this.handleOnChangeEmail}
                />
                <button onClick={this.handleOnSubmit}>Enviar</button>
            </div>
        )
    }
}

export default Home;