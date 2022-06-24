import styled from "styled-components";

export const FormModalContainer = styled.div `
    max-width: none;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.6);
`

export const ModalContainer = styled.section `
    width: auto;
    height: auto;
    background-color: #FFFFFF;
    padding: 40px;
    border-radius: 5px;
    position: relative;

    > button {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        background-color: transparent;
        border: none;

        svg {
            width: 100%;
            height: 100%;
        }
    }
`

export const InputContainer = styled.section `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;

    h3, input {
        margin: 0 0 20px;
    }

    input, button {
        width: 100%;
        height: 40px;
        padding: 0 10px;
    }

    button {
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        background-color: #222923;
    }
`
