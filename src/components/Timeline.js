import React from "react"
import styled from "styled-components"

import Heading from "@styles/Heading"
import theme from "@styles/theme"

import TimelineItem from "./timeline/TimelineItem"

const { colors } = theme

const Timeline = ({ data, title }) => {
  const items = data.edges.map(edge => edge.node)
  return (
    <Container>
      <Heading variant="h2">{title}</Heading>
      <Content>
        {items.map(item => (
          <TimelineItem key={item.id} {...item} {...item.frontmatter} />
        ))}
      </Content>
    </Container>
  )
}

export default Timeline

const Content = styled.div`
  align-items: center;
  display: flex;
  grid-column: 1 / -1;
  padding: 0 0 32px 56px;
  position: relative;

  &:before {
    background: ${colors.grays.med};
    content: "";
    height: 100%;
    left: 20px;
    position: absolute;
    top: 0;
    width: 1px;
  }
`

const Container = styled.section`
  grid-column: span 6;
`
