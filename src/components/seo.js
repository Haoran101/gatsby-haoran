import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {


  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <title>{title} | {data.site.siteMetadata.title}</title>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <script src="https://kit.fontawesome.com/55c0c530fe.js" crossOrigin="anonymous"></script>
    </>
  )
}

export default Seo