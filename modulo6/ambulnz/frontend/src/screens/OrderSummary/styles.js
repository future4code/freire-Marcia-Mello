import styled from "styled-components";

export const ContainerSection = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 15px;

    position: fixed;
    bottom: 0;

    box-shadow: 1px 0px 5px black;

    background-color: #ffffff;

    @media (min-width: 766px){
        min-height: 100vh;

        max-width: 20em;

        border-left: 1px solid #8e8e8e;

        position: relative;
        bottom: auto;

        box-shadow: none;
    }

    h1 {
        font-size: 1.5em;

        text-align: center;
        
        padding: 0 0 10px;

        border-bottom: 1px solid #8e8e8e;

        margin: 0 0 20px;
    }

    li {
        padding: 0 15px 0 0;

        p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        button {
            height: 40px;
            width: auto;

            border: 0;

            outline: 0;

            background-color: #ffffff;

            border-radius: 6px;

            cursor: pointer;

            svg {
                transition: all 0.3s ease;

            &:hover {
                fill: red;
            }
            }
        }                      
    }
`

export const OrdersContainer = styled.section`

`

export const CloseOrderWrapper = styled.section`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        height: 40px;
        width: 100%;

        border: 0;

        outline: 0;

        background-color: #25d67e;

        border-radius: 6px;

        cursor: pointer;

        color: #ffffff;

        font-weight: bold;

        font-size: 14px;
    }
`