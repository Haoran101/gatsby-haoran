import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { BlogHeader, LinkedInShareButton } from '../../components/BlogComponents'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../../styles/blog.css'

const BlogPost = ({ data, children, location }) => {
  const { blog_title, blog_subtitle, blog_description, create_date, update_date, language } = data.mdx.frontmatter;
  const isZh = location.pathname.includes('/zh');
  const blogHome = isZh ? "../../blog/zh" : "../../blog";
  return (
    <Layout pageTitle={blog_title}>
      <BlogHeader
        title={blog_title}
        subtitle={blog_subtitle}
        createDate={create_date}
        updateDate={update_date}
        currentLang={language}
      />
      <div className='text-light blog-wrapper'>{children}</div>
      <LinkedInShareButton 
        title={blog_title}
        summary={blog_description}
        source="Haoran Wei's Blog"
      />
      <div className='py-4 back-wrapper text-center'>
        <a href={blogHome}>
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <span className="px-2">
            {language === 'zh' ? '回到博客首页' : 'Back to all articles'}
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
      blog_description
      slug
      create_date(formatString: "MMMM D, YYYY HH:mm")
      update_date(formatString: "MMMM D, YYYY HH:mm")
      language
      ogImage
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`

export const Head = ({ data }) => {
  const { blog_title, blog_description, slug, ogImage } = data.mdx.frontmatter;
  return <Seo title={blog_title}
    ogTitle={blog_title}
    ogDescription={blog_description}
    ogImage={`https://haoranwei.com/images/${ogImage}`}
    ogUrl={`https://haoranwei.com/blog/${slug}`} />
}

export default BlogPost