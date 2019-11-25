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
    font-size: 16px;
  }

  code {
    font-family: ${theme.fonts.mono};
  }

  h1,
  h2,
  h3 {
    color: ${theme.colors.text.heading};
  }
`

export default GlobalStyle
