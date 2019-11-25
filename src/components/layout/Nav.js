import React from "react"
import styled from "styled-components"
import { Link as BaseLink } from "gatsby"

import Dots from "@components/Dots"
import theme from "@styles/theme"

const Nav = ({ pages }) => (
  <NavContainer>
    <Dots space={6} />
    <NavItemsContainer>
      {pages.map(({ name, path }) => (
        <NavItem key={path}>
          <Link to={path}>{name}</Link>
        </NavItem>
      ))}
    </NavItemsContainer>
  </NavContainer>
)

export default Nav

const NavContainer = styled.nav`
  padding: ${theme.space[3]}px;

  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NavItemsContainer = styled.ul`
  align-items: center;
  display: flex;

  list-style: none;
`

const NavItem = styled.li`
  margin-right: ${theme.space[2]}px;
  opacity: 0;
  pointer-events: none;

  &:last-child {
    margin-left: auto;
    margin-right: 0;
    opacity: 1;
    pointer-events: all;
  }
`

const Link = styled(BaseLink)`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[0]}px;
  font-weight: ${theme.fontWeights.semi};
  text-decoration: none;
`
