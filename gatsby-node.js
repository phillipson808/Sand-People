const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const productListTemplate = path.resolve(`src/templates/Product-list.js`)

  const res = await graphql(`
    query {
      allShopifyProduct {
        nodes {
          handle
        }
      }
      allShopifyCollection{
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

  // Create product-list pages
  res.data.allShopifyCollection.nodes.forEach(node => {
    createPage({
      // Path for this page — required
      path: `/products/collections/${node.handle}`,
      component: productListTemplate,
      context: {
        slug: node.handle
      },
    })
  })
  
  const sharp = require('sharp');

sharp.cache(false);
sharp.simd(false);

  
}
