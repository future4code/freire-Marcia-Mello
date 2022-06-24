import styled from "styled-components";

export const SearchContainer = styled.section`
    width: auto;
    position: relative;
    align-self: center;

    input, button {
        padding: 10px 15px;
    }

    input {
        border: 0;
        border-radius: 5px 0 0 5px;

        :focus {
            outline: none;
        }
    }

    button {
        border: none;
        border-radius: 0 5px 5px 0;
        color: #FFFFFF;
        background-color: #4a514b;
    }
    
    p {
        position: absolute;
        bottom: 5px;
        left: 0;
        font-size: 14px;
        cursor: pointer;
        
        @media (min-width: 768px){
            bottom: -10px;
        }
    }

    padding: 10px 0 30px;

    @media (min-width: 768px){
        padding: 10px 0;
    }
`