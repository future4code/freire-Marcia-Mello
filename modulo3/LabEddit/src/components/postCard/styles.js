import styled from "styled-components";

export const PostCardContainer = styled.div`
    width: 100%;
    max-width: 450px;
    min-height: 167px;
    box-sizing: border-box;
    margin: 0 0 1rem;
    background-color: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 9px 10px;
    gap: 18px;

    h4 {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-align: start;
        color: #6F6F6F;
    }

    p {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
            border: 0.796748px solid #ECECEC;
            border-radius: 28px;
            margin: 0 20px 0 0;
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 9.56098px;
            line-height: 12px;
            text-align: center;
            background-color: #FBFBFB;
            color: #6F6F6F;
            
            img {
                margin: 0 .5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                
                :hover {
                    transform: scale(1.2);
                }
            }
        }
    }
`