import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
    > div {
        width: 100%;
        min-height: 100vh;
        background-image: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 0 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
        color: #f2f2f2;
        margin: 20px;
    }

    h2 {
        color: #f2f2f2;
        margin: 20px;
        text-align: start;
    }

    button {
        padding: 10px 20px;    
        background-color: #cccccc;
        border: 1px solid #cccccc;
        color: #0e0e0e;
        font-weight: bold;
        transition: all 0.4s ease;
        border-radius: 5px;
        cursor: pointer;
        box-sizing: border-box;

        :hover {
            background-color: #0e0e0e;
            color: #FFFFFF;
        }
    }

    .trip-details-card, .admin-trip-card, .candidate-card {
        max-width: 500px;
        width: 100%;
        padding: 20px;
        margin: 20px 0 0;
        box-shadow: 0 1px 5px #f2f2f2;
        transition: all 0.4s ease;
        box-sizing: border-box;
        background-color: #FFFFFF;
        
    }

    .trip-details-card {
        h4, p {
            margin: 0 0 10px;
        }
    }

    .admin-trip-card {
        cursor: pointer;

        :hover {
            box-shadow: 1px 2px 10px #f2f2f2;
        }

        h4 {
            margin: 0;
        }
    } 

    .candidate-card {
        max-width: 500px;
        width: 100%;
        padding: 20px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-weight: bold;

        button {
            margin: 0 10px 0 0;

            :first-child {
                :hover {
                    background-color: #b70000;
                }
            }

            :last-child {
                :hover {
                    background-color: #3ab766;
                }
            }
        }

        p {
            margin: 0 0 10px;
            font-weight: 400;
        }
    }

    .candidates-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0 0;
        box-sizing: border-box;

        input, select {
            width: 100%;
            box-sizing: border-box;
            margin: 0 0 15px;
            padding: 10px 15px;
            border-radius: 5px;
            outline: none;
            border: 1px solid #cccccc;
        }

        select {
            cursor: pointer;
        }
    }

    .buttons-container {
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0 0;
    }
`