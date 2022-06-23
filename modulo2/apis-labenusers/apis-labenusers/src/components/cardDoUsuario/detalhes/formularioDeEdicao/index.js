import React, { Component } from 'react'

class FormularioDeEdicao extends Component {

    render() {
        const { name, placeholderName, onChangeName, email, placeholderEmail, onChangeEmail, onSubmit } = this.props

        return (
            <div>
                <input
                    placeholder={placeholderName}
                    type="text"
                    value={name}
                    onChange={onChangeName}
                />
                <input
                    placeholder={placeholderEmail}
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <button onClick={onSubmit}>Enviar</button>
            </div>
        )
    }
}

export default FormularioDeEdicao;