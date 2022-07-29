import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 1rem;

    hr {
        margin: 1rem 0;
    }
`


export const StyledButton = styled(Button) `
    border-radius: 20px !important;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin: 3rem 0 20px;
`

export const FeedFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin-bottom: 20px;
`

export const FeedButtonContainer = styled.div`
    width: 80vw;
    max-width: 450px;
`