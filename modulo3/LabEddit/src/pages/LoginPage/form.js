import React from 'react'

// material-ui
import { TextField } from '@material-ui/core';

// routes
import { useNavigate } from 'react-router-dom';

// assets
import useForm from '../../hooks/useForm';

// styles
import { InputsContainer, StyledButton, LoginFormContainer } from './styled';

// services
import { login } from '../../services/users'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()

        login(form, clear, navigate)
    }

    return (
        <InputsContainer>
            <LoginFormContainer onSubmit={handleOnSubmit}>
                <TextField
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="email"
                />
                <TextField
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    label="Senha"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="password"
                />

                <StyledButton
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    margin="normal"
                >
                    Continuar
                </StyledButton>
                <hr />
            </LoginFormContainer>
        </InputsContainer>
    )
}

export default LoginForm;