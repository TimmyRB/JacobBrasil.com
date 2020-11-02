/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}`,
      component: path.resolve("./src/templates/projectTemplate.tsx"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
