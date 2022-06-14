import styled from 'styled-components';

export const MainContainer = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: auto;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        border: 0;
        background-color: #0e0e0e;
        color: #FFFFFF;
        border-radius: 5px;
        margin: 20px 0 0;
        cursor: pointer;
    }
`

export const EtapaContainer = styled.div `
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;

    h1 {
        font-size: 22px;
        margin: 0 0 20px;
    }

    label {
        margin: 0 0 10px;
        font-size: 18px;
    }

    input, select {
        margin: 0 0 20px;
    }
`