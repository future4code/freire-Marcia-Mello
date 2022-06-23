import React, { Component } from 'react'

// components

// requests
import { searchUsers } from '../../utils/requests';

class BuscaUsuarios extends Component {
    state = {
        searchedUsers: [],
        searchName: "",
        SearchEmail: "",
    }

    handleSearchUser = async () => {
        const { searchName, SearchEmail } = this.state;

        const response = await searchUsers(searchName, SearchEmail);

        this.setState({
            searchedUsers: response
        })
    }

    handleOnChangeName = (event) => {
        this.setState({
            searchName: event.target.value
        })
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            SearchEmail: event.target.value
        })
    }

    render() {
        const { name, email, searchedUsers } = this.state;

        return (
            <section>
                <h2>Buscar usuários</h2>
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
                <button onClick={this.handleSearchUser}>Enviar</button>
                <ul>
                    {
                        searchedUsers && searchedUsers.map((user) => {
                            return <li key={user.id}>{user.name}</li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default BuscaUsuarios;