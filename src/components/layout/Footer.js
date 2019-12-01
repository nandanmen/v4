import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import Dots from "@components/Dots"
import theme from "@styles/theme"

const Footer = () => (
  <FooterContainer>
    <Dots space={theme.space[1]} />
    <p><code>Narendra Syahrasyad 2019</code></p>
    <Dots space={theme.space[1]} />
  </FooterContainer>
)

export default Footer

const FooterContainer = styled(motion.footer)`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
padding: ${theme.space[6]}px ${theme.space[3]}px;
  width: 100%;
`