import React from "react"
import GlobalStyle from "@styles/GlobalStyle"

const Layout = ({ children }) => (
  <div id="root">
    <GlobalStyle />
    <main>{children}</main>
  </div>
)

export default Layout
