import styled from "styled-components";

export const ContainerSection = styled.section`
    min-height: 100vh;

    padding: 15px 15px 385px;

    @media (min-width: 1024px){
        padding: 15px;
    }

    ul {
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;

        gap: 15px;

        @media (min-width: 766px){
            flex-direction: row;
        }
    }
`