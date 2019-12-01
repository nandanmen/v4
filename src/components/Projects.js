import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import { Dot } from "./Dots"

const Projects = ({ data }) => {
  const projects = data.edges.map(edge => edge.node)
  return (
    <ProjectsContainer>
      <Title>Featured Open-Source</Title>
      {projects.map(project => (
        <Project key={project.id}>
          <ProjectThumbnail color={project.frontmatter.color}>
            <ProjectImg
              alt={project.frontmatter.title}
              id={project.frontmatter.title}
              src={`./thumbnails/${project.frontmatter.cover}`}
            />
          </ProjectThumbnail>
          <ProjectDescription>
            <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
            <ProjectTech>
              {project.frontmatter.tech.map((tech, index) => (
                <>
                  <code key={tech}>{tech}</code>
                  {index < project.frontmatter.tech.length - 1 && (
                    <Separator key={index} />
                  )}
                </>
              ))}
            </ProjectTech>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </ProjectDescription>
        </Project>
      ))}
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled(motion.section)`
  margin-top: ${theme.space[8]}px;
`

const Title = styled(motion.h1)`
  font-size: ${theme.fontSizes[2]}px;
  margin-bottom: ${theme.space[4]}px;
`

const Project = styled(motion.section)`
  margin-bottom: ${theme.space[6]}px;
`

const ProjectThumbnail = styled(motion.figure)`
  background-color: #${({ color }) => color};
  border-radius: 8px;
  height: 368px;
  overflow: hidden;
  margin-bottom: ${theme.space[4]}px;
  width: 100%;
`

const ProjectImg = styled(motion.img)`
  margin-top: ${theme.space[5]}px;
  margin-left: ${theme.space[5]}px;
  width: 100%;

  &#Dictionary {
    object-fit: cover;
    margin-left: 0;
    margin-top: 1em;
  }

  &#Music {
    height: 400px;
    width: auto;
    max-width: none;
  }
`

const ProjectDescription = styled(motion.article)`
  font-size: inherit;
`

const ProjectTitle = styled(motion.h1)`
  font-size: ${theme.fontSizes[2]}px;
  margin-bottom: ${theme.space[1]}px;
`

const ProjectTech = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: inherit;
  margin-bottom: ${theme.space[3]}px;
`

const Separator = styled(Dot)`
  background-color: ${theme.colors.text.primary};
  margin: 0 ${theme.space[2]}px;
`
