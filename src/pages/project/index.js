import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import CustomCard from '../../components/product_article'
import '../../styles/project_index.scss'
import { graphql } from 'gatsby'

const ProjectPage = ({ data }) => {

	const colors = ["blue", "red", "green", "yellow"]

	const first = data.allMdx.nodes[2].frontmatter

	console.log(data.allMdx.nodes)
	console.log(first)
	
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
query {
  allMdx {
	nodes {
	  frontmatter {
		date
		description
		img_src
		img_title
		project_subtitle
		project_title
		tags
		slug
	  }
	  id
	}
  }
}
`

export const Head = () => <Seo title="Project" />

export default ProjectPage