/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Omnimetic",
    description: "Utility data simpler than ever before",
    image: "/favicon.ico",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://omnimetic-website-cms-xeyel.ondigitalocean.app",
        queryLimit: 1000,
        collectionTypes: [`articles`, `tags`, `authors`],
        singleTypes: [`home-page`, `footer`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:400,500,600,700`, `Montserrat\:500,700`],
      },
    },
  ],
}
