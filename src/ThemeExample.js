import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';

const BaseTheme = {
    color: '#222',
    background: '#fff',
};

const DarkTheme = {
    color: '#fff',
    background: '#222',
};

const Container = styled.div`
    padding: 2rem;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};

    .btn {
        background: #645cff;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        text-transform: capitalize;
        padding: 0.25rem;
        display: block;
        width: 200px;
        margin: 1rem auto;
    }
`;

const App = () => {
    const [baseTheme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!baseTheme);
    };

    return (
        <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
            <GlobalStyles />
            <Container>
                <h1>Hello World</h1>
                <button onClick={toggleTheme} className='btn'>
                    toggle me
                </button>
            </Container>
        </ThemeProvider>
    );
};

export default App;
