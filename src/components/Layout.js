import React from "react"

import GlobalStyle from "@styles/GlobalStyle"

const Layout = props => (
  <>
    <GlobalStyle />
    <main {...props} />
  </>
)

export default Layout
