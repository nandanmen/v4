import { Link as BaseLink } from "gatsby"
import React from "react"
import styled from "styled-components"

import theme from "@styles/theme"

const Sidebar = ({ pages }) => (
  <SidebarContainer>
    <SidebarItemsContainer>
      {pages.map(({ name, path }) => (
        <SidebarItem key={path}>
          <Link to={path}>{name}</Link>
        </SidebarItem>
      ))}
    </SidebarItemsContainer>
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

  background-color: #222223;
`

const SidebarItemsContainer = styled.ul`
  list-style: none;
`

const SidebarItem = styled.li`
  margin-bottom: ${theme.space[3]}px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Link = styled(BaseLink)`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[3]}px;
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;
`