import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import LogoEmail from './assets/icones/gmail.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/T01EARPHHKN-U03F2AENWMS-08c34e8eef7a-512" 
          nome="Marcia Mello" 
          descricao="Oi, eu sou a Marcia. Sou professora de inglês em transição para a área de programação. Sempre gostei de aprender outros idiomas, linguagens e suas vertentes, sendo a tecnologia uma delas."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={LogoEmail}
          titulo="Email"
          texto="mdepmell@gmail.com"
        />
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/331/331810.png"
          titulo="Endereço"
          texto="Comendador Siqueira, 763"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://thumbs.dreamstime.com/b/aprenda-o-conceito-ingl%C3%AAs-da-esfera-nuvem-palavra-127725238.jpg" 
          nome="professora de inglês autônomo" 
          descricao="Ensinando inglês do básico ao avançado, nos últimos cinco anos focada em empresas." 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1413183413322928134/IQQZwt7g_400x400.jpg" 
          nome="Labenu" 
          descricao="Aprendendo JS, HTML, CSS, React, para me tornar uma desenvolvedora Web Full Stack." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
