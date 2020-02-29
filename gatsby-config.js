/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
plugins: [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-shopify`,
    options: {
      // The domain name of your Shopify shop.
      shopName: `[shopname]`,
      // The storefront access token
      accessToken: `[token]`,
      apiVersion: "2020-01",
      
      verbose: true,

      paginationSize: 250,

      includeCollections: ["shop", "content"],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      useMozJpeg: false,
      stripMetadata: true,
      defaultQuality: 75,
    },
  },
]
}
