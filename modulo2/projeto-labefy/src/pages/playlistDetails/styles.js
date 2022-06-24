import styled from "styled-components";

export const PlaylistDetailsContainer = styled.section `
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

    h3 {
        width: 100%;
        color: #f2f2f2;
    }
` 