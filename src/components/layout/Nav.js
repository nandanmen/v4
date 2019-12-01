import React, { useState } from "react"
import styled from "styled-components"
import { Link as BaseLink } from "gatsby"

import Dots from "@components/Dots"
import theme from "@styles/theme"
import Sidebar from "./Sidebar"

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
}

const logoVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
}

const Nav = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Sidebar
        animate={isOpen ? "open" : "closed"}
        pages={pages}
        transition={{ type: "tween", ease: "easeOut" }}
        variants={sidebarVariants}
      />
      <NavContainer>
        <Logo
          animate={isOpen ? "open" : "closed"}
          onClick={() => setIsOpen(prev => !prev)}
          space={6}
          variants={logoVariants}
        />
        <NavItemsContainer>
          {pages.map(({ name, path }) => (
            <NavItem key={path}>
              <Link to={path}>{name}</Link>
            </NavItem>
          ))}
        </NavItemsContainer>
      </NavContainer>
    </>
  )
}

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

const Logo = styled(Dots)`
  z-index: 20;
`
