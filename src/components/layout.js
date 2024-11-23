import * as React from 'react'
import CustomHeader from './header';

const Layout = ({ children }) => {

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
    <div className="main-container d-flex w-100 text-white">
      <div className="star-field" ref={starFieldRef} />
      <div className="d-flex w-100 h-100 flex-column cover-container ">
        <CustomHeader></CustomHeader>
        {children}
      </div>
    </div>
  )
}

export default Layout