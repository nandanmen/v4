import React from "react"
import styled from "styled-components"
import { format } from "date-fns"

import Heading from "@styles/Heading"
import Text from "@styles/Text"
import theme from "@styles/theme"

const { colors, space } = theme

const TimelineItem = ({ html, endDate, startDate, title }) => (
  <div>
    <Header>
      <Text variant="secondary">{getDateText(startDate, endDate)}</Text>
      <Heading variant="h3">{title}</Heading>
    </Header>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

export default TimelineItem

const getDateText = (startDate, endDate) => {
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (end.getFullYear() === 9999) {
    return `${format(start, "MMMM yyyy")} — Present`
  }
  return `${format(start, "MMMM yyyy")} — ${format(end, "MMMM yyyy")}`
}

const Header = styled.header`
  margin-bottom: ${space[3]};
  padding-top: 6px;
  position: relative;

  &:before {
    align-items: center;
    background: ${colors.grays.med};
    border-radius: 50%;
    color: ${colors.grays.dark};
    content: "✓";
    display: flex;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    left: -56px;
    position: absolute;
    top: 0;
    width: 40px;
  }
`
