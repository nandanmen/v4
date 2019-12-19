import React from "react"
import styled from "styled-components"

import { Experience, Hero, Layout, Projects, Circle } from "@components"
import useIndexInfo from "@utils/useIndexInfo"
import { prop } from "@utils"

const IndexPage = () => {
  const data = useIndexInfo()
  return (
    <Layout>
      <StyledCircle top={-40} right={-60} size={200} {...scaleProps()} />
      <StyledCircle
        color="#362A89"
        top={120}
        right={-30}
        size={100}
        {...scaleProps(0.3)}
      />
      <Hero data={data.hero} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
    </Layout>
  )
}

export default IndexPage

const StyledCircle = styled(Circle)`
  position: absolute;
  top: ${prop("top")}px;
  right: ${prop("right")}px;
  z-index: -1;
`

const scaleProps = (delay = 0.2) => ({
  animate: {
    scale: 1,
  },
  initial: {
    scale: 0,
  },
  transition: {
    delay,
  },
})
