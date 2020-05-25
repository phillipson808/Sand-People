import React from "react"
import styles from "../styles/featuredproducts.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const FeaturedProducts = () => {
  let data = useStaticQuery(graphql`
    {
      allShopifyCollection(
        sort: { fields: [title] }
        filter: { handle: { eq: "featured" } }
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
  data = data.allShopifyCollection.edges[0].node
  let productArray = data.products.slice(0, 3)
  return (
    <div>
      <div id={styles.titleContainer}>
        <h2>Featured Products</h2>
      </div>
      <div id={styles.container}>
        {productArray.map(item => {
          return (
            <div className={styles.product} key={item.id}>
              <Link to={`/products/${item.handle}`}>
                <Img
                  className={styles.gridImage}
                  fluid={item.images[0].localFile.childImageSharp.fluid}
                ></Img>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProducts
