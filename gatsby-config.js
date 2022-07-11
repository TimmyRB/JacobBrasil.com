require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Jacob Brasil`,
    description: `A collection of projects created or contributed to by Jacob Brasil.`,
    author: `Jacob Brasil`,
    menuLinks: [
      {
        name: 'Projects',
        slug: '/projects'
      },
      // {
      //   name: 'About',
      //   slug: '/about'
      // },
    ]
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mpj2gwc257cd`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JacobBrasil.com`,
        short_name: `JacobBrasil.com`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `./src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: false, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: false, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand\:300,400,500,700`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-78357354-6`,
      },
    },
  ],
}
