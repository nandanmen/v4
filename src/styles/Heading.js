import styled from "styled-components"
import theme from "./theme"

const { colors, fontWeights, fontSizes } = theme

const variants = {
  md: {
    fontSize: fontSizes[4],
  },
  sm: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights.medium,
  },
}

const getVariant = variant => variants[variant] || {}

const Heading = styled.h1(({ variant }) => ({
  color: colors.blacks.title,
  fontSize: fontSizes[6],
  fontWeight: fontWeights.bold,
  ...getVariant(variant),
}))

export default Heading
