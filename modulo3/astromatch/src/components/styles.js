import styled from "styled-components";

export const ImageBackground = styled.section`
    width: 100%;
    height: 90%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: #FFFFFF;

    div {
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 20px;
        margin: 0 0 6rem;

        h4 {
            span {
                font-weight: 400;
            }
        }
    }
`

export const MatchButton = styled.button`
    width: 25%;
    height: 15%;
    padding: 25px 0 0 20px;
    border-radius: 100% 0 0 0;
    position: absolute;
    border: 0;
    bottom: 0;
    right: 0;
    background-color: #179b1c;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 50px;
    color: #FFFFFF;

    :hover {
        background-color: #127a16;
    }

    svg {
        color: #FFFFFF;
        height: 3rem;
        width: 3rem;
    }
`

export const DismatchButton = styled.button`
    width: 25%;
    height: 15%;
    padding: 25px 20px 0 0;
    border-radius: 0 100% 0 0;
    position: absolute;
    border: 0;
    bottom: 0;
    left: 0;
    background-color: #9b151f;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
        background-color: #7f1219;
    }

    svg {
        transform: rotate(45deg);
        color: #FFFFFF;
        height: 3rem;
        width: 3rem;
    }
`

export const DetailsContainer = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    max-height: 510px;

    ::-webkit-scrollbar {
        display: none;
    }

    button {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        border: 0;
        padding: 15px 20px;
        color: #FFFFFF;
        background-color: rgba(0,0,0,0.5);
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 5px;

        :hover {
            background-color: rgba(0,0,0,0.9);
        }
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 20px;
    padding: 0 15px;


    img {
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 10px 0 0;
    }
`