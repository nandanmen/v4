import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "@components/Layout"

export default () => {
  const content = useStaticQuery(graphql`
    query ContentQuery {
      header: allMarkdownRemark(
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
      <h1>{content.header.edges[0].node.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content.header.edges[0].node.html }}
      />
    </Layout>
  )
}
