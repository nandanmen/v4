import React from "react"

const Experience = ({ data }) => {
  const jobs = data.edges.map(edge => edge.node)
  return (
    <section>
      {jobs.map(job => (
        <section key={job.id}>
          <header>
            <h1>
              {job.frontmatter.title} @ <span>{job.frontmatter.company}</span>
            </h1>
            <p>{new Date(job.frontmatter.startDate).toDateString()}</p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: job.html }} />
        </section>
      ))}
    </section>
  )
}

export default Experience
