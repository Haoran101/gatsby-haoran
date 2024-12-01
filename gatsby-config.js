const target = process.env.TARGET || 'main';

const sharedPlugins = [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Open Sans`,
          file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
        },
      ],
    },
  },
  `gatsby-plugin-sass`,
  `gatsby-transformer-yaml`,
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `project`,
      path: `${__dirname}/src/content/readme/project/`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `resume`,
      path: `${__dirname}/src/content/readme/resume/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/content/readme/resume/images/`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `${__dirname}/src/content/readme/resume/images/gatsby-icon.png`,
    },
  },
];

const blogConfig = {
  siteMetadata: {
    title: 'Haoran\'s Blog',
    description: 'stories.haoranwei.com',
  },
  plugins: sharedPlugins
}

const mainConfig = {
  siteMetadata: {
    title: "Haoran Wei",
    description: 'Haoran Wei\'s Home',
  },
  plugins: sharedPlugins
}

const config = target === 'blog' ? blogConfig : mainConfig;

module.exports = config;