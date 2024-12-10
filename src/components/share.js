import * as React from 'react';

const LinkedInShareButton = ({ title, summary, source }) => {
    // Dynamically get the current URL
    const postUrl = encodeURIComponent(
      typeof window !== "undefined" ? window.location.href : ""
    );
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${encodeURIComponent(
      title
    )}&summary=${encodeURIComponent(summary)}&source=${encodeURIComponent(source)}`;
  
    return (
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#0077B5",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn Logo"
          style={{ marginRight: 8, width: 20, height: 20 }}
        />
        Share on LinkedIn
      </a>
    );
  };
  
export default LinkedInShareButton;