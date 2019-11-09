import styled from "styled-components"
import theme from "./theme"

const { grid, space } = theme

const Grid = styled.main({
  paddingLeft: space.pageMargin,
  paddingRight: space.pageMargin,
  display: "grid",
  gridTemplateColumns: grid.columns,
  gridColumnGap: grid.gap,
})

export default Grid
