import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Theme from './styles/themes/default';

import Routes from './routes';

import Header from './components/Header';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <GlobalStyle />
        <Header>
          <Logo />
          <Menu />
        </Header>

        <Main>
          <Routes />
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
