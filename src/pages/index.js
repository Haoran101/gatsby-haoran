// Step 1: Import React
import * as React from 'react'
import "../styles/style.css"
import Seo from '../components/seo'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <main className="px-3 my-auto">
        <h1>Hello.</h1>
        <p className="lead px-2">
            Software Test Engineer <span className="slash">/</span> Quality Assurance <br></br>
            passionate <span className="slash">/</span> detail-oriented <span className="slash">/</span> quick-learner
        </p>
        <p className="lead">
          <a href="/" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Know More</a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a
          href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
      </footer>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />

// Step 3: Export your component
export default IndexPage