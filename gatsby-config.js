const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: false
  },
  siteMetadata: {
    siteUrl: 'https://goharbar.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        fileName: isDev,
        displayName: isDev,
        pure: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '24a4b5e230d070e9df97581798d2ff',
        localeFallbacks: {
          'ar-AE': 'en',
          'fa': 'en',
        },
      },
    },
  ],
};
