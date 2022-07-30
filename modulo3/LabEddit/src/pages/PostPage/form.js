import React from 'react'

// material-ui
import { TextField } from '@material-ui/core';

// assets
import useForm from '../../hooks/useForm';

// styles
import { InputsContainer, StyledButton, PostFormContainer } from './styled';

// services
import { createComment } from '../../services/post';

const PostForm = ({getComments, id}) => {
    const [form, onChange, clear] = useForm({
        body: ''
    })

    const handleOnSubmit = (event) => {
        event.preventDefault()

        createComment(form, clear, id, getComments)
    }

    return (
        <InputsContainer>
            <PostFormContainer onSubmit={handleOnSubmit}>
                <TextField
                    name="body"
                    value={form.body}
                    onChange={onChange}
                    label="Comentário"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                />

                <StyledButton
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    margin="normal"
                >
                    Responder
                </StyledButton>
                <hr />
            </PostFormContainer>
        </InputsContainer>
    )
}

export default PostForm;