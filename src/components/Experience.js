import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import { getMonthText } from "@utils/date"
import Dots from "./Dots"

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
      <Separator numX={10} space={theme.space[2]} />
      <section>
        <JobHeader>
          <JobTitle>
            {activeJob.frontmatter.title} @{" "}
            <span>{activeJob.frontmatter.company}</span>
          </JobTitle>
          <JobDate>
            {getJobDateText(
              new Date(activeJob.frontmatter.startDate),
              new Date(activeJob.frontmatter.endDate)
            )}
          </JobDate>
        </JobHeader>
        <JobDescription dangerouslySetInnerHTML={{ __html: activeJob.html }} />
      </section>
    </ExperienceContainer>
  )
}

export default Experience

/**
 * @param {Date} startDate
 * @param {Date} endDate
 */
const getJobDateText = (startDate, endDate) => {
  const hasEndDate = endDate.getFullYear() !== 9999
  if (hasEndDate) {
    return `${getMonthText(
      startDate
    )} ${startDate.getFullYear()} - ${getMonthText(
      endDate
    )} ${endDate.getFullYear()}`
  }
  return `${getMonthText(startDate)} ${startDate.getFullYear()} - Present`
}

const ExperienceContainer = styled(motion.section)`
  margin-top: 160px;
`

const Title = styled(motion.h1)`
  font-size: ${theme.fontSizes[2]}px;
  margin-bottom: ${theme.space[4]}px;
`

const Tabs = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: ${theme.space[4]}px;
  overflow-x: scroll;
`

const Tab = styled(motion.button)`
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  font-family: ${theme.fonts.mono};
  font-size: 1em;
  margin-right: ${theme.space[2]}px;
  padding: ${theme.space[2]}px;

  /* show hover state only in non-mobile */
  ${theme.breakpoints.sm} {
    &:hover {
      background-color: ${theme.colors.blacks[1]};
      color: ${theme.colors.white};
    }
  }

  &:last-child {
    margin-right: 0;
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${theme.colors.blacks[2]};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.blacks[2]};
    }
  `}
`

const Separator = styled(Dots)`
  margin-bottom: ${theme.space[4]}px;
`

const JobHeader = styled(motion.header)`
  margin-bottom: ${theme.space[3]}px;
`

const JobTitle = styled(motion.h1)`
  margin-bottom: ${theme.space[1]}px;
  font-weight: ${theme.fontWeights.semi};
`

const JobDate = styled(motion.p)`
  font-family: ${theme.fonts.mono};
`

const JobDescription = styled(motion.div)`
  background-color: ${theme.colors.blacks[2]};
  border-radius: 8px;
  color: ${theme.colors.white};
  padding: ${theme.space[3]}px ${theme.space[3]}px ${theme.space[3]}px
    ${theme.space[5]}px;

  li {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
