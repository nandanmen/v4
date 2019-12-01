import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import { array, prop } from "@utils"

const DOT_SIZE = 5

const Dots = ({ numX = 2, numY = 2, space = 24, ...props }) => {
  const xArr = array(numX)
  const yArr = array(numY)
  return (
    <DotGrid x={numX} y={numY} gap={space} {...props}>
      {xArr.map((_, x) => yArr.map((_, y) => <Dot key={`${x}/${y}`} />))}
    </DotGrid>
  )
}

export default Dots

const DotGrid = styled(motion.div)`
  display: grid;
  grid-gap: ${prop("gap")}px;
  grid-template-columns: repeat(${prop("x")}, ${DOT_SIZE}px);
  grid-template-rows: repeat(${prop("y")}, ${DOT_SIZE}px);
`

export const Dot = styled(motion.div)`
  height: ${DOT_SIZE}px;
  width: ${DOT_SIZE}px;

  background-color: ${theme.colors.white};
  border-radius: 50%;
`
