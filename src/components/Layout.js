import React from "react"
import styled from "styled-components"
import GlobalStyle from "@styles/GlobalStyle"

const Layout = ({ children }) => (
  <div id="root">
    <GlobalStyle />
    <Main>{children}</Main>
  </div>
)

export default Layout

const Main = styled.main`
  color: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
`
