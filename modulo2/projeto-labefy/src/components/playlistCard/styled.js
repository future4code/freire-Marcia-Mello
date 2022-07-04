import styled from "styled-components";

export const PlaylistContainer = styled.div`
    width: calc(100% / 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 0 20px 0 0;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
        background-color: #bfbfbf;
    }

    p {
        width: 100%;
        padding: 10px 0 10px 20px;
        color: #0e0e0e;
    }
        
    > button {
        width: auto;
        height: 100%;
        background-color: transparent;
        border: none;
        transition: all 0.3s ease;

        :hover svg{
            fill: red;
        }
    }

    @media (min-width: 768px){
        width: calc(100% / 4.2);
    }
`