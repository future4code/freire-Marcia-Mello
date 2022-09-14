import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button) `
    border-radius: 20px !important;
    margin: 1rem 0 0;
`

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start ;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 1rem;

    hr {
        margin: 1rem 0;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    align-items: center;
`

export const PostFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    margin-bottom: 20px;
`