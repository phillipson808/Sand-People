import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/productpage.module.scss"
import AddToCart from "../components/AddToCart"
import warnIcon from "../img/exclamation-red.svg"

export const query = graphql`
  query($slug: String!) {
    shopifyProduct(handle: { eq: $slug }) {
      handle
      images {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      title
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      variants {
        availableForSale
        shopifyId
        image {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      productType
      description
    }
  }
`

const Product = props => {
  const [qty, setAddQty] = useState(1)

  
  let variantArray = props.data.shopifyProduct.variants.map((variant, i) =>  {
    return (
      [variant.id, variant.image.localFile["childImageSharp"].fluid.src]
    )
  })



  let variantId = props.data.shopifyProduct.variants[0].shopifyId
  let imageSrc =
    props.data.shopifyProduct.images[0].localFile["childImageSharp"].fluid.src

  return (
    <Layout>
      {console.log('VARIANT IDs', variantArray)}
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt="Product Image"></img>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h1>{props.data.shopifyProduct.title}</h1>
            <div className={styles.priceContainer}>
              <p>
                $
                {Number(
                  props.data.shopifyProduct.priceRange.maxVariantPrice.amount
                ).toFixed(2)}
              </p>
              {props.data.shopifyProduct.variants[0].availableForSale ? (
                <p></p>
              ) : (
                <div className={styles.warningContainer}>
                  <img
                    src={warnIcon}
                    className={styles.warnIcon}
                    alt="Warning Icon"
                  ></img>
                  <p className={styles.soldOut}>Sold Out</p>
                </div>
              )}
            </div>

            <div className={styles.cartandquantity}>
              <table
                className={
                  props.data.shopifyProduct.variants[0].availableForSale
                    ? styles.table
                    : styles.hide
                }
              >
                <tbody>
                  <tr>
                    <td
                      className={styles.qtybtn}
                      onClick={() => {
                        if (qty > 1) {
                          setAddQty(qty - 1)
                        } else {
                          return
                        }
                      }}
                    >
                      -
                    </td>
                    <td className={styles.qty}>{qty}</td>
                    <td
                      className={styles.qtybtn}
                      onClick={() => {
                        setAddQty(qty + 1)
                      }}
                    >
                      +
                    </td>
                  </tr>
                </tbody>
              </table>
              {props.data.shopifyProduct.variants[0].availableForSale ? (
                <AddToCart variantId={variantId} qty={qty} />
              ) : (
                <button id={styles.buttonDisabled} disabled>
                  Add to Cart
                </button>
              )}
            </div>
            <p className={styles.description}>
              {props.data.shopifyProduct.description}
            </p>
          </div>
          {props.data.shopifyProduct.variants.map((variant) => (
            <div><img src={variant.image.localFile["childImageSharp"].fluid.src} key={variant.id}></img></div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Product
