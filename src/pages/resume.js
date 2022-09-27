// Step 1: Import React
import * as React from 'react'
import Header from '../components/header'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const ResumePage = () => {
  return (
    <Header/>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Resume"/>

// Step 3: Export your component
export default ResumePage