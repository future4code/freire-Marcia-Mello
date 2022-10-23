import styled from "styled-components"

export const ContainerLi = styled.li`
    max-width: 100%;
    min-height: 400px;

    box-shadow: 1px 3px 5px #0e0e0e;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 0 15px;

    padding: 15px;

    border-radius: 6px;

    @media (min-width: 766px){
        max-width: calc((100% / 2) - 30px);
    }

    @media (min-width: 1024px){
        max-width: calc((100% / 3) - 30px);
    }

    h3,
    .card-price {
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        font-weight: bold;

        margin: 10px 0 0;

        p {
            color: #ffffff;
        }
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0 0 10px;

        span {
            width: auto;

            padding: 0 5px;

            margin: 10px 5px 0 0;

            background-color: #6cd6a2;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 4px;

            font-weight: bold;

            font-size: 14px;
        }
    }

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

export const InformationsWrapper = styled.section `
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const PizzaIcon = styled.img `
    width: 100%;
    height: auto;
`