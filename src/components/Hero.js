import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import Dots, { Dot } from "./Dots"

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 16,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
}

const Hero = ({ data }) => {
  const { html, frontmatter } = data.edges[0].node
  return (
    <Header
      animate="visible"
      initial="hidden"
      transition={{ delay: 0.2 }}
      variants={containerVariants}
    >
      <Dots variants={childVariants} numX={6} numY={2} space={theme.space[2]} />
      <Title variants={childVariants}>{frontmatter.title}</Title>
      <Description
        variants={childVariants}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Tech variants={childVariants}>
        {frontmatter.tech.map((tech, index) => (
          <React.Fragment key={tech}>
            <code key={tech}>{tech}</code>
            {index < frontmatter.tech.length - 1 && <Separator key={index} />}
          </React.Fragment>
        ))}
      </Tech>
    </Header>
  )
}

export default Hero

const Header = styled(motion.header)`
  margin-top: 96px;
`

const Title = styled(motion.h1)`
  margin-top: ${theme.space[6]}px;
  font-size: ${theme.fontSizes[3]}px;
`

const Description = styled(motion.div)`
  margin-top: ${theme.space[1]}px;
  margin-bottom: ${theme.space[4]}px;
`

const Tech = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: inherit;
`

const Separator = styled(Dot)`
  background-color: ${theme.colors.text.primary};
  margin: 0 ${theme.space[2]}px;
`
