import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import Dots from "./Dots"

const Hero = ({ data }) => {
  const { html, frontmatter } = data.edges[0].node
  return (
    <Header>
      <Dots numX={6} numY={2} space={theme.space[2]} />
      <Title>{frontmatter.title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: html }} />
    </Header>
  )
}

export default Hero

const Header = styled(motion.header)`
  margin: ${theme.space[6]}px 0;
`

const Title = styled.h1`
  margin-top: ${theme.space[4]}px;
  font-size: ${theme.fontSizes[3]}px;
`

const Description = styled.div`
  margin-top: ${theme.space[1]}px;
`
