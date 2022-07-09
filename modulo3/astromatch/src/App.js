import styled from 'styled-components';
import React, { useState } from 'react'
import { GlobalStyle } from "./globalStyles";
import AstroCardHome from './components/astroCardHome';
import AstroCardDetalhes from './components/astroCardDetalhes';
import Logo from './assets/images/logo';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
`

const AstroCardContainer = styled.div`
    width: 90%;
    max-width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 5px #0e0e0e;
    position: relative;

    header {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
            height: 100%;
        }

        svg {
            cursor: pointer;
        }

        .details {
            position: absolute;
            right: 15px;
            width: 1.8rem;
            height: 100%;
            fill: rgb(117, 49, 176);
            transition: all 0.5s ease;

            :hover {
                transform: scale(1.2);
            }
        }

        .home {
            position: absolute;
            left: 15px;
            width: 1.8rem;
            height: 100%;
            fill: rgb(74, 163, 151);
            transition: all 0.5s ease;

            :hover {
                transform: scale(1.2);
            }
        }
    }
`

function App() {
  const [pagina, setPagina] = useState("home")

  const trocarDePagina = () => {
    pagina === "home" ? setPagina("detalhes") : setPagina("home")
  }

  const renderizarPagina = () => {
    return pagina === "home" ? (
      <>
        <AstroCardHome />
      </>
    ) : (
      <>
        <AstroCardDetalhes/>
      </>
    )
  }

  return (
    <MainContainer>
      <GlobalStyle />
      <AstroCardContainer>
        <header>
          <Logo />
          {
            pagina !== "home" ? (
              <svg onClick={() => trocarDePagina()} viewBox="0 0 24 24" role="presentation" class="home"><path d="M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z"></path></svg>
            ) : (
              <svg onClick={() => trocarDePagina()} viewBox="0 0 24 24" role="presentation" class="details"><path d="M22.59,7.92L23.75,9.33L19,14.08L16.25,11.08L17.41,9.92L19,11.5L22.59,7.92M6,5A3,3 0 0,1 9,8A3,3 0 0,1 6,11A3,3 0 0,1 3,8A3,3 0 0,1 6,5M11,5A3,3 0 0,1 14,8A3,3 0 0,1 11,11C10.68,11 10.37,10.95 10.08,10.85C10.65,10.04 11,9.06 11,8C11,6.94 10.65,5.95 10.08,5.14C10.37,5.05 10.68,5 11,5M6,13C8,13 12,14 12,16V18H0V16C0,14 4,13 6,13M12.62,13.16C14.63,13.5 17,14.46 17,16V18H14V16C14,14.82 13.45,13.88 12.62,13.16Z"></path></svg>
            )
          }
        </header>
        {renderizarPagina()}
      </AstroCardContainer>
    </MainContainer>
  );
}

export default App;
