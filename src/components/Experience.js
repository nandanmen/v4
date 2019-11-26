import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"

const Experience = ({ data }) => {
  const jobs = data.edges.map(edge => edge.node)
  return (
    <ExperienceContainer>
      {jobs.map(job => (
        <section key={job.id}>
          <header>
            <h1>{job.frontmatter.title}</h1>
            <p>{new Date(job.frontmatter.startDate).toDateString()}</p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: job.html }} />
        </section>
      ))}
    </ExperienceContainer>
  )
}

export default Experience

const ExperienceContainer = styled(motion.section)`
  margin-top: 160px;
`
