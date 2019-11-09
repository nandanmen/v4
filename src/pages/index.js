import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "@components/Hero"
import Layout from "@components/Layout"
import Timeline from "@components/Timeline"

import Section from "@styles/Section"

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
      work: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/work/" } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              startDate
              endDate
            }
          }
        }
      }
      activities: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/activities/" } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              startDate
              endDate
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero data={content.hero} />
      <Section>
        <Timeline data={content.work} title="Work" />
        <Timeline data={content.activities} title="Activities" />
      </Section>
    </Layout>
  )
}
