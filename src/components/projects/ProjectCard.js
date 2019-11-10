import React from "react"
import styled from "styled-components"

import Box from "@styles/Box"
import Heading from "@styles/Heading"
import Text from "@styles/Text"

const ProjectCard = ({
  title,
  tech,
  github,
  link,
  color,
  cover,
  html,
  ...props
}) => (
  <Box {...props}>
    <Figure bg={`#${color}`} mb={4}>
      <Image id={title} src={`./thumbnails/${cover}`} ml={4} mt={4} />
    </Figure>
    <article>
      <Heading mb={1} variant="h2">
        {title}
      </Heading>
      <Text mb={2} variant="secondary">
        {tech.sort().join(" / ")}
      </Text>
      <Box mb={2} dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  </Box>
)

export default ProjectCard

const Figure = styled(Box).attrs({ as: "figure" })`
  border-radius: 8px;
  height: 368px;
  overflow: hidden;
  width: auto;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`

const Image = styled(Box).attrs({ as: "image" })`
  width: 100%;
  transition: all 0.2s ease-out;

  &#Dictionary {
    object-fit: cover;
    margin-left: 0;
    margin-top: 1em;
  }

  &#Music {
    height: 400px;
    width: auto;
    max-width: none;
  }
`
