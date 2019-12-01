import React from "react"

import { Experience, Hero, Layout, Projects } from "@components"
import useIndexInfo from "@utils/useIndexInfo"

const IndexPage = () => {
  const data = useIndexInfo()
  return (
    <Layout>
      <Hero data={data.hero} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
    </Layout>
  )
}

export default IndexPage
