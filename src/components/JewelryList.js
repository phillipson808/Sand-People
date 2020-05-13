import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/jewelry.module.scss"
import Img from "gatsby-image"

const Jewelry = () => {
  let data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        sort: { fields: [title] }
        filter: { handle: { eq: "jewelry" } }
      ) {
        edges {
          node {
            id
            title
            handle
            products {
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
              handle
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
    }
  `)
  data = data.allShopifyCollection.edges[0].node;
 
  return (
    <div>
      <div id={styles.Showcase}>
        <div className={styles.showcaseContent}>
          <h1>Jewelry</h1>
          <p>Shop our collection of ocean-inspired products.</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.products.map(item => {
            return (
              <div className={styles.productImage} key={item.id}>
                <Link to={`/products/${item.handle}`}>
                  <Img
                    className={styles.gridImage}
                    fluid={item.images[0].localFile.childImageSharp.fluid}
                  ></Img>
                </Link>
                <div className={styles.content}>
                  <div>
                    <h4 className={styles.productDesc}>{item.title}</h4>
                    <p className={styles.productDesc}>
                      $
                      {Number(
                        item.priceRange.maxVariantPrice.amount
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

export default Jewelry
