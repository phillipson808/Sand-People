import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/productpage.module.scss"
import AddToCart from "../components/AddToCart"
import warnIcon from "../img/exclamation-red.svg"
import placeholder from "../img/hula-placeholder-01-compressor.png"

const parse = require("html-react-parser")

export const query = graphql`
  query($slug: String!) {
    shopifyProduct(handle: { eq: $slug }) {
      handle
      descriptionHtml
      vendor
      images {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      title
      availableForSale
      shopifyId
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
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        title
        price
      }
      productType
      description
    }
  }
`

const Product = props => {
  const [qty, setAddQty] = useState(1)
  const [imageSrc, setImageSrc] = useState("")
  const [variantId, setVariantId] = useState("")
  const [isAvailable, setIsAvailable] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  let variantArray = props.data.shopifyProduct.variants.map(variant => {
    return [
      variant.shopifyId ? variant.shopifyId : "",
      variant.image.localFile["childImageSharp"].fluid.src
        ? variant.image.localFile["childImageSharp"].fluid.src 
        : placeholder,
      variant.title ? variant.title : "",
      variant.availableForSale ? variant.availableForSale : "",
      variant.price ? variant.price : "",
      variant.id ? variant.id : "",
      variant.vendor ? variant.vendor : "",
      variant.images ? variant.images : [],
    ]
  })
  console.log(variantArray);

  let currentVariantId = variantArray[0][0]

  let image = variantArray[0][1]

  let imagesArray = props.data.shopifyProduct.images
    ? props.data.shopifyProduct.images
    : []

  let initialAvailability = variantArray[0][3] ? variantArray[0][3] : false

  let updateItem = (image, id, isAvailable) => {
    setImageSrc(image)
    setVariantId(id)
    setIsAvailable(isAvailable)
  }

  let updateImage = image => {
    setImageSrc(image)
  }

  useEffect(() => {
    setImageSrc(image)
    setCurrentImageIndex(0)
    setVariantId(currentVariantId)
    setIsAvailable(initialAvailability)
    updateItem(image, currentVariantId, initialAvailability)
    console.log("variant array", variantArray)
  }, [])

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <div>
              <img src={imageSrc} alt="Product Image"></img>
            </div>
            <div className={styles.productImages}>
              {imagesArray && variantArray.length === 1
                ? imagesArray.map(image => {
                    return (
                      <div className={imagesArray.length > 1 ? styles.productVariantContainer : styles.hide}>
                        <img
                          src={image.localFile["childImageSharp"].fluid.src ? image.localFile["childImageSharp"].fluid.src : <div></div>}
                          onClick={() => {
                            updateImage(
                              image.localFile["childImageSharp"].fluid.src ? image.localFile["childImageSharp"].fluid.src : <div></div>
                            )
                          }}
                        ></img>
                      </div>
                    )
                  })
                : variantArray.map(item => {
                    return (
                      <div className={variantArray.length > 1 ? styles.productVariantContainer : styles.hide}>
                        <img
                          src={item[1]}
                          onClick={() => {
                            updateItem(item[1], item[0], item[3])
                          }}
                        ></img>
                      </div>
                    )
                  })}
            </div>
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
                {isAvailable ? (
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
                    props.data.shopifyProduct.availableForSale
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
                {isAvailable ? (
                  <AddToCart variantId={variantId} qty={qty} />
                ) : (
                  <button id={styles.buttonDisabled} disabled>
                    Add to Cart
                  </button>
                )}
              </div>
              <div className={styles.variantHeader}>
                {variantArray.length > 1 ? <h3>Variants</h3> : <p></p>}
              </div>
              <div className={styles.variantContainer}>
                <div className={styles.variantButtonContainer}>
                  {variantArray.map(variant => {
                    if (variantArray.length > 1) {
                      return (
                        <div key={variant[0]}>
                          <button
                            id={styles.variantButton}
                            onClick={e => {
                              updateItem(variant[1], variant[0], variant[3])
                            }}
                          >
                            {variant[2]}
                          </button>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
              <p className={styles.description}>
                {parse(props.data.shopifyProduct.descriptionHtml)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product
