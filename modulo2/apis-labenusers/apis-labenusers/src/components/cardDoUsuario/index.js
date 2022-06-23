import React, { Component } from 'react'

// components
import Detalhes from './detalhes'

class CardDoUsuario extends Component {
    render() {
        const { user, onDelete, name, onChangeName, email, onChangeEmail, onSubmit, userData, detailFields, editFields, onClickDetalhes, onClickEditar } = this.props

        return (
            <li>
                {user.name}
                <button onClick={onDelete}>deletar</button>
                <Detalhes
                    name={name}
                    onChangeName={onChangeName}
                    email={email}
                    onChangeEmail={onChangeEmail}
                    onSubmit={onSubmit}
                    userData={userData}
                    detailFields={detailFields}
                    editFields={editFields}
                    onClickDetalhes={onClickDetalhes}
                    onClickEditar={onClickEditar}
                />
            </li>
        )
    }
}

export default CardDoUsuario;