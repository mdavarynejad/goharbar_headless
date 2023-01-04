const isDev = process.env.NODE_ENV === 'production';

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: false
  },
  siteMetadata: {
    siteUrl: 'https://goharbar.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'goharbar.com', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /404
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'my-domain.com',
            to: 'mydomain.com',
          },
          {
            from: 'my-other-domain.com',
            to: 'mydomain.com',
          },
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },
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
