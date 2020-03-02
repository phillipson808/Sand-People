import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/product.module.scss"
import Img from "gatsby-image"

const Products = () => {
  let data = useStaticQuery(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            shopifyId
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)
  data = data.allShopifyProduct.edges
  console.log(data)
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <div className={styles.grid}>
        {data.map(item => {
          return (
            <div className={styles.productImage} key={item.node.shopifyId}>
              <Img className={styles.gridImage}
                fluid={
                  item.node.images[0].localFile.childImageSharp.fluid
                }
              />
              <p className={styles.productDesc}>{item.node.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getProducts: payload => dispatch(getProducts(payload)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Products)
export default Products
