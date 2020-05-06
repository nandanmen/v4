import React from "react"

import Layout from "@components/Layout"
import useModules from "@utils/useModules"

export default function IndexPage() {
  const modules = useModules()
  return (
    <Layout>
      {modules.map(module => (
        <div key={module.id}>
          <h1>{module.frontmatter.title}</h1>
          <p>{module.frontmatter.description}</p>
        </div>
      ))}
    </Layout>
  )
}
