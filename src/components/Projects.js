import React from "react"

const Projects = ({ data }) => {
  const projects = data.edges.map(edge => edge.node)
  return (
    <section>
      {projects.map(project => (
        <section key={project.id}>
          <img src={`./thumbnails/${project.frontmatter.cover}`} />
          <article>
            <h1>{project.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </article>
        </section>
      ))}
    </section>
  )
}

export default Projects
