import styled from "styled-components"

export const ContainerDiv = styled.div`
    
    position: fixed;
    inset: 0;

    width: auto;

    background-color: rgba(0,0,0, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        position: relative;
        width: 100%;
        max-width: 400px;
        height: 100%;
        max-height: 300px;
        padding: 15px;

        border-radius: 6px;

        background-color: #ffffff;

        position: relative;

        font-size: 14px;

        h2 {
            color: #6cd6a2;
        }

        p {
            margin: 0 0 10px;
        }

        .close-popup {
            position: absolute;
            top: 15px;
            right: 15px;

            padding: 2px 5px;

            width: auto;

            :hover {
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
`
