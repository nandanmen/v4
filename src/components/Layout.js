import React from "react"

import GlobalStyle from "@styles/GlobalStyle"
import Grid from "@styles/Grid"

const Layout = ({ children }) => (
  <div id="root">
    <GlobalStyle />
    <Grid>{children}</Grid>
  </div>
)

export default Layout
