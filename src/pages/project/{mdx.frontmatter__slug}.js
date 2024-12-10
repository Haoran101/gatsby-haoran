import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../../styles/blog.css' 

const BlogPost = ({ data, children }) => {
  const hero_image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.project_title}>
      <div className='py-4'>
      <GatsbyImage
        image={hero_image}
        alt="alt"
        style = {{overflow: "unset"}}
      ></GatsbyImage></div>
      <div className='text-light blog-wrapper'>{children}</div>
      <div className='py-4 back-wrapper text-center'>
        <a href="../../project">
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <span className="px-2">
            Back to all projects
          </span>
        </a>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      project_title
      img_title
      date(formatString: "MMMM D, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.project_title} />

export default BlogPost