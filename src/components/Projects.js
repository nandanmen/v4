import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import ProjectCard from "./projects/ProjectCard"

const Projects = ({ data }) => {
  const projects = data.edges.map(edge => edge.node)
  return (
    <ProjectsContainer>
      <Title>Featured Open-Source</Title>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled(motion.section)`
  margin-top: ${theme.space[8]}px;
  width: 100%;
`

const Title = styled(motion.h1)`
  font-size: ${theme.fontSizes[2]}px;
  margin-bottom: ${theme.space[4]}px;
`
