import React from "react"

const Hero = ({ data }) => {
  const { html, frontmatter } = data.edges[0].node
  return (
    <header>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </header>
  )
}

export default Hero
