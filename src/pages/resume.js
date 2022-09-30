// Step 1: Import React
import * as React from 'react'
import Header from '../components/header'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export const query = graphql`
  query ($id: String) {
    resumeYaml(id: {eq: $id}) {
      skill
      experience {
        company
        description
        job
        period
        skills
        title
      }
    }
  }
`


const ResumePage = ({ data }) => {

  console.log(data)
  
  return (
    <Layout>
      Resume Page
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Resume"/>

// Step 3: Export your component
export default ResumePage