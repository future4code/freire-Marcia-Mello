import React from 'react'

// material-ui
import { TextField } from '@material-ui/core';

// assets
import useForm from '../../hooks/useForm';

// styles
import { InputsContainer, StyledButton, FeedFormContainer } from './styled';

// services
import { createPost } from '../../services/post'

const FeedForm = ({getPosts}) => {
    const [form, onChange, clear] = useForm({
        body: '',
        title: ''
    })

    const handleOnSubmit = (event) => {
        event.preventDefault()

        createPost(form, clear)
        getPosts()
    }

    return (
        <InputsContainer>
            <FeedFormContainer onSubmit={handleOnSubmit}>
                <TextField
                    name="body"
                    value={form.body}
                    onChange={onChange}
                    label="Post"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                />
                <TextField
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    label="Título"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                />
                <hr />
                <StyledButton
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    margin="normal"
                >
                    Criar
                </StyledButton>
            </FeedFormContainer>
        </InputsContainer>
    )
}

export default FeedForm;