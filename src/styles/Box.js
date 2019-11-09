import styled from "styled-components"
import { color, grid, layout, space } from "styled-system"

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  color,
  grid,
  layout,
  space
)

export default Box
