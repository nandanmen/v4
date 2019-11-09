import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "@components/Hero"
import Layout from "@components/Layout"

export default () => {
  const content = useStaticQuery(graphql`
    query ContentQuery {
      hero: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero data={content.hero} />
    </Layout>
  )
}
