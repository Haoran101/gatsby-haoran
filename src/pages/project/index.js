import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import CustomCard from '../../components/product_article'
import '../../styles/project_index.scss'
import { graphql } from 'gatsby'

const ProjectPage = ({ data }) => {

	const colors = ["blue", "red", "green", "yellow"]

	return (
		<Layout>
			<div className="container py-4 project-container">
				{
					data.allMdx.nodes.map((node, i) =>
						<CustomCard key={node.id} frontmatter={node.frontmatter} color={colors[i % 4]}></CustomCard>
					)
				}
			</div>
		</Layout>
	)
}

export const query = graphql`
{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          description
          project_subtitle
          project_title
          tags
          slug
          date
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

export const Head = () => <Seo title="Project" />

export default ProjectPage