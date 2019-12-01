import React from "react"
import { graphql } from "gatsby"

import { Experience, Hero, Layout, Projects } from "@components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.hero} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ContentQuery {
    hero: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tech
          }
        }
      }
    }
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            title
            startDate
            endDate
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tech
            github
            link
            color
            cover
          }
        }
      }
    }
  }
`
