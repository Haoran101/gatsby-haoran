import React from 'react';

export const LanguageSwitchButton = ({ currentLang }) => {
  return (
    <div className="text-left">
      {/* Language switch button that toggles between English and Chinese versions
          If current language is Chinese (zh):
            - Removes '/zh/' from path to get English version
            - Shows "Read in English" button text
          If current language is English:
            - Adds '/zh/' after '/blog/' to get Chinese version 
            - Shows "阅读中文" (Read in Chinese) button text
          
          Examples:
          English article: /blog/my-article -> /blog/zh/my-article
          Chinese article: /blog/zh/my-article -> /blog/my-article
      */}
      <button 
        className="btn btn-outline-light mt-3 mb-3"
        onClick={() => {
          const newPath = currentLang === 'zh' 
            ? window.location.pathname.replace('/zh/', '/') 
            : window.location.pathname.replace('/blog/', '/blog/zh/');
          window.location.href = newPath;
        }}
      >
        {currentLang === 'zh' ? 'Read in English' : '阅读中文'}
      </button>
    </div>
  );
};

export const BlogHeader = ({ title, subtitle, createDate, updateDate, currentLang }) => {
  return (
    <div className="blog-wrapper">
      <h1>{title}</h1>
      <p className="mb-4">Created on: {createDate}<br/>
      Last updated: {updateDate}</p>
      <h5>{subtitle}</h5>
      <LanguageSwitchButton currentLang={currentLang} />
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