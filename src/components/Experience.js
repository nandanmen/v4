import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"

const Experience = ({ data }) => {
  const [activeJobIndex, setActiveJobIndex] = useState(0)

  const jobs = data.edges.map(edge => edge.node)
  const activeJob = jobs[activeJobIndex]

  return (
    <ExperienceContainer>
      <Title>Work</Title>
      <Tabs>
        {jobs.map((job, index) => (
          <Tab
            isActive={index === activeJobIndex}
            key={job.id}
            onClick={() => setActiveJobIndex(index)}
          >
            {job.frontmatter.company}
          </Tab>
        ))}
      </Tabs>
      <section>
        <header>
          <h1>
            {activeJob.frontmatter.title} @{" "}
            <span>{activeJob.frontmatter.company}</span>
          </h1>
          <p>{new Date(activeJob.frontmatter.startDate).toDateString()}</p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: activeJob.html }} />
      </section>
    </ExperienceContainer>
  )
}

export default Experience

const ExperienceContainer = styled(motion.section)`
  margin-top: 160px;
`

const Title = styled(motion.h1)`
  font-size: ${theme.fontSizes[2]}px;
`

const Tabs = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Tab = styled(motion.button)`
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  font-family: ${theme.fonts.mono};
  font-size: 1em;
  padding: ${theme.space[2]}px;

  &:hover {
    background-color: ${theme.colors.blacks[3]};
    color: ${theme.colors.white};
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${theme.colors.blacks[2]};
    color: ${theme.colors.white};
  `}
`
