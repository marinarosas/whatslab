import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        font-family: 'Roboto', sans-serif;
    } 

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root{
        display: flex;
        justify-content: center;
    }
`

export const AppContainer = styled.div`
    width: 600px;
    min-height: 100vh;
    /* margin: 0 auto; - outra maneira de centralizar o app na tela*/
`
