import React from "react"
import styled from "styled-components"

export default function Module({ module }) {
  return (
    <ModuleWrapper>
      <h1>{module.frontmatter.title}</h1>
      <p>{module.frontmatter.description}</p>
    </ModuleWrapper>
  )
}

const ModuleWrapper = styled.div`
  background: #2E4756;
  border-radius: 1em;
  padding: 2em;
`
