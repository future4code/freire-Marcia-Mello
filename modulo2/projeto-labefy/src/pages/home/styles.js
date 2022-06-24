import styled from "styled-components";

export const HomeContainer = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;

    max-height: 600px;
    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }
` 