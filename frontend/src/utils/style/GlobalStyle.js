import React from 'react'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 1.5;
        overflow-y: scroll;
        background: ${colors.background};
        color: ${colors.text};
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    #container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        
        &> canvas {
            width: 100% !important;
            height: 100% !important;
        }
    }
`

const GlobalStyle = () => {
    return <StyledGlobalStyle />
}

export default GlobalStyle
