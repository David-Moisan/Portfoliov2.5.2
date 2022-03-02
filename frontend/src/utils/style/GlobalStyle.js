import React from 'react'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100vh;
        background: ${colors.background};
        color: ${colors.text};
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        font-size: 16px;
        line-height: 1.5;
        overflow-y: scroll;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`

const GlobalStyle = () => {
    return <StyledGlobalStyle />
}

export default GlobalStyle
