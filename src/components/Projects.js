import React from "react"
import styled from "styled-components"

import Heading from "@styles/Heading"
import Box from "@styles/Box"
import theme from "@styles/theme"
import Section from "@styles/Section"

import ProjectCard from "./projects/ProjectCard"

const { fontSizes, space } = theme

const Projects = ({ data }) => {
  const projects = data.edges.map(edge => edge.node)
  return (
    <Section>
      <Heading gridColumn="1 / -1" mb={4} variant="h2">
        Personal Projects
      </Heading>
      <Section mb={0}>
        {projects.map(project => (
          <ProjectCard
            gridColumn="span 4"
            {...project}
            {...project.frontmatter}
          />
        ))}
      </Section>
    </Section>
  )
}

export default Projects
