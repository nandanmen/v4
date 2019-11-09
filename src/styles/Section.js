import styled from "styled-components"
import theme from "./theme"

const { grid, space } = theme

const Section = styled.section(props => ({
  display: "grid",
  gridColumn: "1 / -1",
  gridColumnGap: grid.gap,
  gridTemplateColumns: grid.columns,
  marginBottom: space[5],
  ...props,
}))

export default Section
