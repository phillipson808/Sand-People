import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/product.module.scss"
import Img from "gatsby-image"

const Products = () => {
  let data = useStaticQuery(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            handle
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
  console.log("DATA", data)
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>All Products</h1>
      <div className={styles.grid}>
        {data.map(item => {
          return (
            <div className={styles.productImage} key={item.node.shopifyId}>
              <Link to={`/products/${item.node.handle}`}><Img
                className={styles.gridImage}
                fluid={item.node.images[0].localFile.childImageSharp.fluid}
              ></Img></Link>
              <div className={styles.content}>
                <div>
                  <h4 className={styles.productDesc}>{item.node.title}</h4>
                  <p className={styles.productDesc}>
                    $
                    {Number(
                      item.node.priceRange.maxVariantPrice.amount
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
