import React from "react"
import styled from "styled-components"
import { Github, LinkedinSquare, Twitter } from "@styled-icons/boxicons-logos"

import Layout from "@components/Layout"
import Module from "@components/Module"
import useAbout from "@utils/useAbout"
import useModules from "@utils/useModules"

const colors = ["#b5838d", "#6d6875", "#6930c3", "#457b9d"]

export default function IndexPage() {
  const modules = useModules()
  const about = useAbout()
  return (
    <Layout>
      <About>
        <AboutContent dangerouslySetInnerHTML={{ __html: about.html }} />
        <Socials>
          <li>
            <Github size="32" />
          </li>
          <li>
            <LinkedinSquare size="32" />
          </li>
          <li>
            <Twitter size="32" />
          </li>
        </Socials>
      </About>
      <Modules>
        {modules.map((module, index) => (
          <Module color={colors[index]} module={module} />
        ))}
      </Modules>
    </Layout>
  )
}

const About = styled.section`
  grid-column: 1 / span 2;
`

const AboutContent = styled.article`
  > * {
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font-size: 2em;
  }
`

const Modules = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column: span 4 / -1;
  grid-gap: 1em;
`

const Socials = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 32px;

  > * {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`
