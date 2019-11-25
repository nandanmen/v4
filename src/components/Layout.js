import React from "react"

import GlobalStyle from "@styles/GlobalStyle"
import Nav from "./layout/Nav"

const pages = [
  {
    name: "Work",
    path: "#work",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Writing",
    path: "./blog",
  },
  {
    name: "Contact",
    path: "./hello",
  },
  {
    name: "Resume",
    path: "./resume.pdf",
  },
]

const Layout = props => (
  <>
    <GlobalStyle />
    <Nav pages={pages} />
    <main {...props} />
  </>
)

export default Layout
