import { motion } from "framer-motion"
import styled from "styled-components"

import theme from "@styles/theme"
import { prop } from "@utils"

const Circle = styled(motion.div)`
  background-color: ${prop("color")};
  border-radius: 50%;
  height: ${prop("size")}px;
  width: ${prop("size")}px;
`

Circle.defaultProps = {
  color: theme.colors.blues[1],
  size: 64
}

export default Circle
