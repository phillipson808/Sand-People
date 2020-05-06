import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/product.module.scss"
import Img from "gatsby-image"
import warnIcon from '../img/exclamation-red.svg';

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
  return (
    <div>
      <div id={styles.Showcase}>
        <div className={styles.showcaseContent}>
          <h1>All Products</h1>
          <p>Shop our collection of ocean-inspired products.</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.map(item => {
            return (
              <div className={styles.productImage} key={item.node.shopifyId}>
                <Link to={`/products/${item.node.handle}`}>
                  <Img
                    className={styles.gridImage}
                    fluid={item.node.images[0].localFile.childImageSharp.fluid}
                  ></Img>
                </Link>
                <div className={styles.content}>
                  <div>
                    <h4 className={styles.productDesc}>{item.node.title}</h4>
                    {item.node.availableForSale ? <p></p> : <div className={styles.warningContainer}><img src={warnIcon} className={styles.warnIcon} alt='Warning Icon'></img><p className={styles.soldOut}>Sold Out</p></div>}
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
    </div>
  )
}

export default Products
