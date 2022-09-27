import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      Project Page
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMM-DD-YYYY")
//           title
//           slug
//         }
//         id
//       }
//     }
//   }
// `

export const Head = () => <Seo title="Project" />

export default ProjectPage