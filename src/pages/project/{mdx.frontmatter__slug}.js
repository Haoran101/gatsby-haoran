import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.img_src)
  return (
    <Layout pageTitle={data.mdx.frontmatter.project_title}>
    <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.img_title}
    />
    {children}
  </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        project_title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.project_title} />

export default BlogPost