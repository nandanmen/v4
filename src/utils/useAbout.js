import { useStaticQuery, graphql } from "gatsby"

export default function useAbout() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges.map(e => e.node)[0]
}
