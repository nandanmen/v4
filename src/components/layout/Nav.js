import React from "react"
import { Link } from "gatsby"

const Nav = ({ pages }) => (
  <nav>
    <ul>
      {pages.map(({ name, path }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
