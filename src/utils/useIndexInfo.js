import { useStaticQuery, graphql } from "gatsby"

const useIndexInfo = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return data
}

export default useIndexInfo