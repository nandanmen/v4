import Types from "prop-types"
import styled from "styled-components"
import { variant, typography } from "styled-system"

import Box from "./Box"
import theme from "./theme"

const { colors, fontWeights } = theme

const Heading = styled(Box).attrs(({ variant }) => ({ as: variant }))(
  {
    color: colors.blacks.title,
    fontWeight: fontWeights.bold,
    lineHeight: 1.2,
  },
  typography,
  variant({
    variants: {
      h1: {
        fontSize: 6,
      },
      h2: {
        fontSize: 4,
      },
      h3: {
        fontSize: 2,
        fontWeight: "semi",
      },
    },
  })
)

Heading.propTypes = {
  variant: Types.oneOf(["h1", "h2", "h3"]),
}

Heading.defaultProps = {
  variant: "h1",
}

export default Heading
