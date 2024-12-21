import React from 'react';

export const LanguageSwitchButton = ({ currentLang, alignment }) => {
  const alignClass = alignment === 'center' ? 'text-center' : 'text-start';
  return (
    <div className={alignClass}>
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
            ? window.location.pathname.replace(/\/zh\/?/, '/') 
            : window.location.pathname.replace(/\/blog\/?/, '/blog/zh/');
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

export const LinkedInShareButton = ({ title, summary, source}) => {
  return (
    <div className="linkedin-share-button blog-wrapper my-2">
      <button 
      className='btn btn-dark'
        onClick={() => {
        // Build LinkedIn share URL with the following parameters:
        // - url: Current page URL (window.location.href)
        // - title: Title of the article to share
        // - summary: Brief description/summary of the article
        // - source: Source/website name where article is from
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
        
        // Open LinkedIn share dialog in new window/tab
        window.open(url, '_blank');
      }}>
        <span>Share on </span>
        <i className="fa-brands fa-linkedin ml-3"></i>
      </button>
    </div>
  );
}; 