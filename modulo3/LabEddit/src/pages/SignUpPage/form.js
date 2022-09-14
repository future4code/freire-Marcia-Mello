import React from 'react'

// material-ui
import { TextField } from '@material-ui/core';

// routes
import { useNavigate } from 'react-router-dom';

// assets
import useForm from '../../hooks/useForm';

// styles
import { InputsContainer, StyledButton, SignUpFormContainer } from './styled';

// services
import { signUp } from '../../services/users'

const SignUpForm = () => {
    const [form, onChange, clear] = useForm({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()
        
        signUp(form, clear, navigate)
    }

    return (
        <InputsContainer>
            <SignUpFormContainer onSubmit={handleOnSubmit}>
                <TextField
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                />
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
                    Cadastrar
                </StyledButton>
                <hr />
            </SignUpFormContainer>
        </InputsContainer>
    )
}

export default SignUpForm;