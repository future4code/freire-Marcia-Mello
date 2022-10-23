
import styled from "styled-components";

export const ContainerMain = styled.main`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    @media (min-width: 766px){
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
`