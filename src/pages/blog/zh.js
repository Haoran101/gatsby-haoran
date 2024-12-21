import React from "react";
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
//import { graphql } from 'gatsby'
import '../../styles/project_index.scss'
import { Link, graphql } from "gatsby"
//import Bio from "../components/bio"

const BlogIndexZh = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes
  
  // Determine the language based on the path
  const isZh = location.pathname.includes('/zh')
  const currentLang = isZh ? 'zh' : 'en'
  const filteredPosts = posts.filter(post => post.frontmatter.language === (isZh ? 'zh' : 'en'))

  if (filteredPosts.length === 0) {
    return (
      <Layout>
        <main className="px-3 my-auto text-center">
        <h1>Coming Soon</h1><br/><br/>
        <h3>Stay Tuned for Something Amazing</h3>
        </main>
    </Layout>
    )
  }

  return (
    <Layout location={location} title="Haoran Wei's Blog">
      <ol style={{ listStyle: `none` }} className="blog-wrapper">
        {filteredPosts.map(post => {
          const title = post.frontmatter.blog_title || post.frontmatter.slug
          const pureSlug = post.frontmatter.slug.split('/')[1]
          return (
            <li key={post.frontmatter.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h3>
                    <Link to={pureSlug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                  <small>创建于 {post.frontmatter.create_date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.blog_description,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndexZh

export const Head = () => <Seo title="All posts" />

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {parent_name: {eq: "blog"}}}
    ) {
      nodes {
        id
        frontmatter {
          parent_name
          description
          blog_title
          blog_subtitle
          blog_description
          language
          slug
          create_date
          update_date
          img_title
          index_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
