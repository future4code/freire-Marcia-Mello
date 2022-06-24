import styled from "styled-components";

export const TrackCardContainer = styled.div `
    min-width: 300px;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h4 {
        color: #f2f2f2;
    }

    button {
        position: absolute;
        right: 0;
        background-color: transparent;
        border: none;
        color: #f2f2f2;
        z-index: 0;

        svg {
            height: 100%;
            width: 25px;
            fill: #f2f2f2;
        }
    }

    .play-button {
        right: 2rem;
    }
`