import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, ogTitle, ogDescription, ogImage, ogUrl, ogType }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          ogTitle
          ogDescription
          ogImage
          ogUrl
          ogType
          ogSiteName
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata

  return (
    <>
      <title>{title} | {siteMetadata.title}</title>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta property='og:title' content={ogTitle|| siteMetadata.ogTitle }/>
      <meta property='og:description' content={ogDescription || siteMetadata.ogDescription }/>
      <meta property='og:image' content={ogImage || siteMetadata.ogImage}/>
      <meta property='og:url' content={ ogUrl || siteMetadata.ogUrl}/>
      <meta property='og:type' content={ogType || siteMetadata.ogType}/>
      <meta property='og:site_name' content={siteMetadata.ogSiteName}/>
      <script src="https://kit.fontawesome.com/55c0c530fe.js" crossOrigin="anonymous"></script>
      <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="../images/gatsby-icon.png"></link>
    </>
  )
}

export default Seo