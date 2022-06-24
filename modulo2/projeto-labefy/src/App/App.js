import React, { Component } from 'react';

// components
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

// styles
import { AppContainer } from './styles';

class App extends Component {

  render() {
    return (
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
