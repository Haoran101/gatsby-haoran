import React from 'react';

export const LanguageSwitchButton = () => {
  return (
    <div className="text-left">
      <button 
        className="btn btn-outline-light mt-3 mb-3"
        onClick={() => {
          const currentLang = window.location.pathname.includes('/zh/') ? 'zh' : 'en';
          const newPath = currentLang === 'zh' 
            ? window.location.pathname.replace('/zh/', '/') 
            : window.location.pathname.replace('/blog/', '/blog/zh/');
          window.location.href = newPath;
        }}
      >
        {window.location.pathname.includes('/zh/') ? 'Read in English' : '阅读中文'}
      </button>
    </div>
  );
};

export const BlogHeader = ({ title, subtitle, createDate, updateDate }) => {
  return (
    <div className="blog-wrapper">
      <h1>{title}</h1>
      <p className="mb-4">Created on: {createDate}<br/>
      Last updated: {updateDate}</p>
      <h5>{subtitle}</h5>
      <LanguageSwitchButton />
    </div>
  );
};

export const LinkedInShareButton = ({ title, summary, source }) => {
  return (
    <div className="linkedin-share-button">
      <button onClick={() => {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${title}&summary=${summary}&source=${source}`;
        window.open(url, '_blank');
      }}>
        Share on LinkedIn
      </button>
    </div>
  );
}; 