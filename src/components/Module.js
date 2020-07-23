import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Module({ module, color, onClick }) {
  return (
    <ModuleWrapper bg={color} whileHover={{ scale: 1.05 }} onClick={onClick}>
      <motion.h1>{module.frontmatter.title}</motion.h1>
      <motion.p>{module.frontmatter.description}</motion.p>
      <motion.article dangerouslySetInnerHTML={{ __html: module.html }} />
    </ModuleWrapper>
  )
}

const ModuleWrapper = styled(motion.div)`
  background: ${props => props.bg};
  border-radius: 1em;
  padding: 2em;
  height: 100%;
`
