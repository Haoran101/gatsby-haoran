import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { LanguageSwitchButton, BlogHeader, LinkedInShareButton } from '../../components/BlogComponents'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../../styles/blog.css'

const BlogPost = ({ data, children }) => {
  const { blog_title, blog_subtitle, create_date, update_date, language } = data.mdx.frontmatter;
  const hero_image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={blog_title}>
      <div className='py-4'>
        <GatsbyImage
          image={hero_image}
          alt="alt"
          style={{ overflow: "unset" }}
        ></GatsbyImage></div>
      <BlogHeader 
        title={blog_title} 
        subtitle={blog_subtitle} 
        createDate={create_date} 
        updateDate={update_date} 
      />
      {/* <LinkedInShareButton 
        title={blog_title} 
        summary={blog_subtitle} 
        source="Haoran Wei's Blog" 
      /> */}
      <div className='text-light blog-wrapper'>{children}</div>
      <div className='py-4 back-wrapper text-center'>
        <a href="../../blog">
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <span className="px-2">
            Back to all articles
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
      blog_title
      blog_subtitle
      create_date(formatString: "MMMM D, YYYY HH:mm")
      update_date(formatString: "MMMM D, YYYY HH:mm")
      language
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