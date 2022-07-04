import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    max-width: 1366px;
    min-height: 90%;
    position: relative;
    background-color: #222923;
    flex-direction: column;
    
    @media (min-width: 768px){
        flex-direction: row;
    }
`

export const Menu = styled.menu`
    width: 100%;
    max-width: 100%;
    height: auto;
    background-color: #4a514b;
    padding: 0;

    li {
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
        transition: all 0.3s ease;

        :hover {
            background-color: #303531;
        }

        svg {
            width: auto;
            height: 30px;
            fill: #ffffff;
        }

        @media (min-width: 768px){
            text-align: start;
        }
    }

    @media (min-width: 768px){
        max-width: 20%;
        height: 100%;
        padding: 20px 0;
    }
`

export const Content = styled.aside`
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 20px;

    h2 {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: flex-start;

        > button {
            border: none;
            border-radius: 5px;
            color: #FFFFFF;
            background-color: #4a514b;
            padding: 10px 15px;
            margin: 0 0 10px;

            @media (min-width: 768px){
                margin: 0;
            }
        }

        @media (min-width: 768px){
            flex-direction: row;
            align-items: center;
        }
    }

    @media (min-width: 768px){
        max-width: 80%;
        height: 100%;
    }
`