import React from "react";
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
//import { graphql } from 'gatsby'
import '../../styles/project_index.scss'
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
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
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.blog_title || post.frontmatter.slug

          return (
            <li key={post.frontmatter.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.frontmatter.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
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

export default BlogIndex

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
