import styled from "styled-components"

import Box from "./Box"
import theme from "./theme"

const { grid } = theme

const Section = styled(Box).attrs({ as: "section" })({
  display: "grid",
  gridColumn: "1 / -1",
  gridColumnGap: grid.gap,
  gridTemplateColumns: grid.columns,
})

Section.defaultProps = {
  mb: 5,
}

export default Section
