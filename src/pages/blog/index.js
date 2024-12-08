import React from "react";
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CustomCard from '../../components/product_article'
import { graphql } from 'gatsby'
import '../../styles/project_index.scss'

const BlogIndex = () => {
  return (
    <Layout>
        <main className="px-3 my-auto text-center">
        <h1>Coming Soon</h1><br/><br/>
        <h3>Stay Tuned for Something Amazing</h3>
        </main>
    </Layout>
  );
};

// const BlogIndex = ({ data }) => {
//   return (
//       <Layout>
//         <div className="container py-4 project-container">
//           {
//             data.allMdx.nodes.map((node, i) =>
//               <CustomCard key={node.id} frontmatter={node.frontmatter}></CustomCard>
//             )
//           }
//         </div>
//       </Layout>
    
//   );
// };

// export const query = graphql`
//   {
//     allMdx(
//       sort: {fields: frontmatter___date, order: DESC}
//       filter: {frontmatter: {parent_name: {eq: "blog"}}}
//     ) {
//       nodes {
//         id
//         frontmatter {
//           parent_name
//           description
//           project_subtitle
//           project_title
//           tags
//           slug
//           date
//           img_title
//           index_image {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   }
// `
// export const Head = () => <Seo title="Blog" />

export default BlogIndex;
