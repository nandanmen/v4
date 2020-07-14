import React from "react"
import styled from "styled-components"

export default function Module({ module, color }) {
  return (
    <ModuleWrapper bg={color}>
      <h1>{module.frontmatter.title}</h1>
      <p>{module.frontmatter.description}</p>
      <article dangerouslySetInnerHTML={{ __html: module.html }} />
    </ModuleWrapper>
  )
}

const ModuleWrapper = styled.div`
  background: ${props => props.bg};
  border-radius: 1em;
  padding: 2em;
`
