module.exports = {
  siteMetadata: {
    title: 'NYU8',
    siteUrl: process.env.SITE_URL || 'https://nyu8.com',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
