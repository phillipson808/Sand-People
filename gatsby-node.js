const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)

  const res = await graphql(`
    query {
      allShopifyProduct {
        nodes {
          handle
        }
      }
    }
  `)
  // Create product pages.
  res.data.allShopifyProduct.nodes.forEach(node => {
    createPage({
      // Path for this page — required
      path: `/products/${node.handle}`,
      component: productTemplate,
      context: {
        slug: node.handle
      },
    })
  })
}
