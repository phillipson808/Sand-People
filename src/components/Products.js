import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from '../styles/product.module.scss'
import Img from "gatsby-image";

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
  console.log('DATA', data)
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Products</h1>
      <div className={styles.grid}>
        {data.map(item => {
          return (
            <div className={styles.productImage} key={item.node.shopifyId}>
    
                <Img
                  className={styles.gridImage}
                  fluid={item.node.images[0].localFile.childImageSharp.fluid}
                ></Img>

              <h4 className={styles.productDesc}>{item.node.title}</h4>
              <p className={styles.productDesc}>
                $
                {Number(item.node.priceRange.maxVariantPrice.amount).toFixed(2)}
              </p>
              <div className={styles.linkContainer}><Link className={styles.productLink} to={`/products/${item.node.handle}`}>View</Link></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Products
