import { Link as BaseLink } from "gatsby"
import React from "react"
import styled from "styled-components"

import theme from "@styles/theme"

const Sidebar = ({ pages }) => (
  <SidebarContainer>
    <ul>
      {pages.map(({ name, path }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </SidebarContainer>
)

export default Sidebar

const SidebarContainer = styled.aside`
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 70vw;

  align-items: center;
  display: flex;

  padding: ${theme.space[3]}px;

  background-color: ${theme.colors.blacks[2]};
`

const Link = styled(BaseLink)`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[0]}px;
  font-weight: ${theme.fontWeights.semi};
  text-decoration: none;
`
