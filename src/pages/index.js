import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "@components/Layout"

export default function IndexPage() {
  const content = useStaticQuery(graphql`
    query ContentQuery {
      header: allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)
  console.log(content)
  return (
    <Layout>
      <h1>{content.header.edges[0].node.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content.header.edges[0].node.html }}
      />
    </Layout>
  )
}
