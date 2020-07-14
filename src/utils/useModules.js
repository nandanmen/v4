import { useStaticQuery, graphql } from "gatsby"

export default function useModules() {
  const data = useStaticQuery(graphql`
    query ModulesQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/modules/" } }) {
        edges {
          node {
            id
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
  return data.allMarkdownRemark.edges.map(e => e.node)
}
