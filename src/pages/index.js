// Step 1: Import React
import * as React from 'react'
import "../styles/style.css"
import Seo from '../components/seo'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {

// Use React's useRef hook to safely access the DOM element
const starFieldRef = React.useRef(null);

// Use React's useEffect hook to generate stars once when the component mounts
React.useEffect(() => {
  if (starFieldRef.current) {
    const generateStars = (num) => {
      for (let i = 0; i < num; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size between 1px and 3px
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position within the viewport
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;

        // Add the star to the star field
        starFieldRef.current.appendChild(star);
      }
    };

    // Generate 200 stars
    generateStars(200);
  }
}, []); // Empty dependency array to run only once after component mounts


  return (
    <Layout>
      <main className="px-3 my-auto text-center">
        <h1>Hello.</h1>
        <p className="lead px-2 fs-4">
          Software Test Engineer <span className="slash">/</span> Quality Assurance <br></br>
          passionate <span className="slash">/</span> detail-oriented <span className="slash">/</span> quick-learner
        </p>
        <p className="lead">
          <a href="./resume" className="btn btn-md fw-bold border-white bg-white text-black my-4">Know More</a>
        </p>
      </main>

      <footer className="mt-auto text-light text-center footer-container">
        <a href="tel:+6585101992" className='mx-3'>
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:wei.haoran@hotmail.com" className='mx-3'>
          <i className="fa-solid fa-at"></i>
        </a>
        <a href="https://www.linkedin.com/in/haoran-wei-6b3a571a5/" className='mx-3'>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Haoran101" className='mx-3'>
        <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />

// Step 3: Export your component
export default IndexPage