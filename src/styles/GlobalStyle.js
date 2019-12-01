import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${theme.colors.blacks[0]};
    color: ${theme.colors.text.primary};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes[0]}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${theme.breakpoints.sm} {
      font-size: ${theme.fontSizes[1]}px;
    }
  }

  code {
    font-family: ${theme.fonts.mono};
  }

  h1,
  h2,
  h3 {
    color: ${theme.colors.text.heading};
  }

  button {
    border: none;
    outline: none;
  }
`

export default GlobalStyle
