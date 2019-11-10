import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "@components/Hero"
import Layout from "@components/Layout"
import Projects from "@components/Projects"
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
  `)

  return (
    <Layout>
      <Hero data={content.hero} />
      <Section mb={[4, 5]}>
        <Timeline data={content.work} title="Work" />
        <Timeline data={content.activities} title="Activities" />
      </Section>
      <Projects data={content.projects} />
    </Layout>
  )
}
