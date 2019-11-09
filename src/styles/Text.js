import styled from "styled-components"
import theme from "./theme"

const { colors, fontSizes } = theme

const variants = {
  secondary: {
    color: colors.grays.dark,
  },
}

const getVariant = variant => variants[variant] || {}

const Text = styled.p(({ variant }) => ({
  color: colors.blacks.body,
  fontSize: fontSizes[1],
  ...getVariant(variant),
}))

export default Text
