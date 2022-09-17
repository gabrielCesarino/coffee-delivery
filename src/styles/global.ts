import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme['gray-100']};
        color: ${props => props.theme['gray-700']};
        -webkit-font-smoothing: antialised;
    }

    input, body, textarea, button {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`