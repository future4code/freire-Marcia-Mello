import React, { Component } from 'react'

// components
import CardDoUsuario from '../../components/cardDoUsuario'
import BuscaUsuarios from '../../components/buscaUsuarios'

// requests
import { getAllUsers, deleteUser, editUser, getUserById } from '../../utils/requests'

class ListaDeUsuarios extends Component {
    state = {
        users: [],
        userData: {},
        editFields: false,
        detailFields: false,
        name: "",
        email: ""
    }

    componentDidMount() {
        this.handleGetUsers()
    }

    // get all users method

    handleGetUsers = async () => {
        const users = await getAllUsers()

        this.setState({
            users: users
        })
    }

    // get user data method

    handleGetUserData = async (id) => {
        const user = await getUserById(id)

        this.handleOpenDetailFields()

        this.setState({
            userData: user
        })
    }

    handleOpenEditFields = () => {
        const { editFields } = this.state

        this.setState({
            editFields: !editFields
        })
    }

    handleOpenDetailFields = () => {
        const { detailFields } = this.state

        this.setState({
            detailFields: !detailFields
        })
    }

    // delete user method

    handleDeleteUser = async (id) => {
        await deleteUser(id)
        
        this.handleGetUsers()
    }

    // edit user methods

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

    handleEditUser = async (id) => {
        const { name, email, userData } = this.state;

        if(name === "" && email === "") return;

        if(name === ""){
            await editUser(id, userData.name, email)
        } else if (email === ""){
            await editUser(id, name, userData.email)
        } else {
            await editUser(id, name, email)
        }

        this.handleClearFields()
        this.handleOpenEditFields()
        this.handleGetUsers()

        this.handleOpenDetailFields()
    }

    handleClearFields = () => {
        this.setState({
            name: "",
            email: ""
        })
    }

    render() {
        const { users, name, email, editFields, detailFields, userData } = this.state

        return (
            <div>
                <h2>Lista de usuários</h2>
                <ul>
                    {
                        users.map((user) => {
                            return <CardDoUsuario 
                                key={user.id} 
                                user={user}
                                onDelete={() => this.handleDeleteUser(user.id)}
                                name={name}
                                onChangeName={this.handleOnChangeName}
                                email={email}
                                onChangeEmail={this.handleOnChangeEmail}
                                onSubmit={() => this.handleEditUser(user.id)}
                                userData={userData}
                                editFields={editFields}
                                detailFields={detailFields}
                                onClickDetalhes={() => this.handleGetUserData(user.id)}
                                onClickEditar={this.handleOpenEditFields}
                            />
                        })
                    }
                </ul>
                <BuscaUsuarios/>
            </div>
        )
    }
}

export default ListaDeUsuarios;