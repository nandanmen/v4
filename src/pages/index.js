import React from "react"
import styled from "styled-components"

import Layout from "@components/Layout"
import Module from "@components/Module"
import useModules from "@utils/useModules"

export default function IndexPage() {
  const modules = useModules()
  return (
    <Layout>
      <About>
        <h1>Hi! I'm Nanda.</h1>
        <p>
          I'm a software developer @ Tapestry, tech lead @ UBC Launchpad and 4th
          year Business and Computer Science @ UBC.
        </p>
      </About>
      <Modules>
        {modules.map(module => (
          <Module module={module} />
        ))}
      </Modules>
    </Layout>
  )
}

const About = styled.section`
  grid-column: 1 / span 2;
`

const Modules = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column: span 4 / -1;
  grid-gap: 1em;
`
