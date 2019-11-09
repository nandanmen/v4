import styled from "styled-components"
import { variant } from "styled-system"

import Box from "./Box"

const Text = styled(Box).attrs({ as: "p" })(
  variant({
    variants: {
      primary: {
        color: "blacks.body",
      },
      secondary: {
        color: "grays.dark",
      },
    },
  })
)

Text.defaultProps = {
  variant: "primary",
  fontSize: [0, 1],
}

export default Text
