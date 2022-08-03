import styled from "styled-components";

export const AstroCardContainer = styled.div`
    width: 400px;
    height: 700px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    
    section {
        position: relative;
    }

    img {
        margin-top: 150px;
        width: 600%;
        position: absolute;
        height: auto;
        inset: 0;
        
    }

    h2 {
        text-align: left;
        color:  brown;
    }
    
    p{
        color: whitesmoke;
        position: absolute;
        top: 370px;
        left: 14%;
        word-wrap: break-word;
        width: 300px;
        text-align: left;
    

    }
`

