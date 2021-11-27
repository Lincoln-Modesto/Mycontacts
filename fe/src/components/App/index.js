import React from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/GlobalStyle';
import defaultTheme from '../../assets/styles/themes/default'

import { Container } from './styles'
import { Header } from '../Header'
import Routes from '../../Routes'

import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Container>
                    <Header />
                    <Routes />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
