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
        <h1>Hello. I'm Haoran</h1>
        <p className="lead px-2 fs-4 pt-2">
          I share knowledge and stories with people<br/> 
          I help people to improve their quality of life <br/>
           Software Quality Engineer <span className="slash"> / </span> 
           Self Starter <span className="slash"> / </span> 
           Content Creator
        </p>
        <div className="lead my-4">
          <span className='px-2'>
          <a href="./blog" className="btn btn-md fw-bold border-white bg-white text-black">Read Me</a>
          </span>
          <span className='px-2'>
          <a href="./resume" className="btn btn-md fw-bold border-white bg-white text-black">Hire Me</a>
          </span>
        </div>
      </main>

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />

// Step 3: Export your component
export default IndexPage