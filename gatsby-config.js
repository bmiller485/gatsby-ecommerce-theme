module.exports = {
  siteMetadata: {
    title: `Blowzie eCommerce Site`,
    siteUrl: `https://www.blowzie.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blowzie eCommerce Site`,
        short_name: `Blowzie`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
