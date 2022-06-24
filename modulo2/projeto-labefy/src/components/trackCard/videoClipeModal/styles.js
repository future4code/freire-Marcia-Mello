import styled from "styled-components";

export const VideoClipeContainer = styled.div `
    max-width: none;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.6);
    z-index: 1;
`

export const ModalContainer = styled.section `
    width: 600px;
    max-width: 90%;
    height: 210px;
    max-height: 50%;
    background-color: #FFFFFF;
    padding: 0;
    border-radius: 5px;
    position: relative;

    @media (min-width: 768px){
        width: 600px;
        height: 400px;
    }

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
            fill: #f2f2f2;
        }
    }

    iframe {
        height: 100%;
        width: 100%;
        border: 0;
    }
`