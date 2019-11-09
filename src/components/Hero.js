import React from "react"
import styled from "styled-components"

import Heading from "@styles/Heading"
import theme from "@styles/theme"

const { fontSizes, space } = theme

const Hero = ({ data }) => {
  const { frontmatter, html } = data.edges[0].node
  return (
    <Container>
      <Heading>{frontmatter.title}</Heading>
      <Description dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}

export default Hero

const Container = styled.header({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gridColumn: "3 / -3",
})

const Description = styled.div({
  fontSize: fontSizes.lg,
  marginBottom: space[4],
  marginTop: space[4],
  textAlign: "center",
  width: "80%",
})
