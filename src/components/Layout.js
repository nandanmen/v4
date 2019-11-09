import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "@styles/GlobalStyle"
import Grid from "@styles/Grid"
import theme from "@styles/theme"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div id="root">
      <GlobalStyle />
      <Grid>{children}</Grid>
    </div>
  </ThemeProvider>
)

export default Layout
