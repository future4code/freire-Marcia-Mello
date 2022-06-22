import React, { Component } from 'react'

// components
import FormularioDeEdicao from './formularioDeEdicao';

class Detalhes extends Component {

    render() {

        const { userData, name, onChangeName, email, onChangeEmail, onSubmit, detailFields, editFields, onClickDetalhes, onClickEditar } = this.props;

        return (
            <>
                <button onClick={onClickDetalhes}>detalhes</button>
                {
                    detailFields && <section>
                        <p>{userData.name}</p>
                        <p>{userData.email}</p>
                        <button onClick={onClickEditar}>editar</button>
                        {
                            editFields && <FormularioDeEdicao 
                                name={name}
                                placeholderName={userData.name}
                                onChangeName={onChangeName}
                                email={email}
                                placeholderEmail={userData.email}
                                onChangeEmail={onChangeEmail}
                                onSubmit={onSubmit}
                            />
                        }
                    </section>
                }
            </>

        )
    }
}

export default Detalhes;