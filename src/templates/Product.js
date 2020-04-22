import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { StoreContext } from "../context/StoreContext"
import styles from "../styles/productpage.module.scss"
import AddToCart from "../components/AddToCart"



export const query = graphql`
  query($slug: String!) {
    shopifyProduct(handle: { eq: $slug }) {
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
      title
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      variants {
        availableForSale
        shopifyId
      }
      productType
      description
    }
  }
`

const Product = props => {
  const {
    removeQuantityFromCart,
  } = useContext(StoreContext)
  let variantId = props.data.shopifyProduct.variants[0].shopifyId
  console.log(
    "Variant ID",
    props.data.shopifyProduct.images[0].localFile["childImageSharp"].fluid.src
  )
  let imageSrc =
    props.data.shopifyProduct.images[0].localFile["childImageSharp"].fluid.src
  return (
    <Layout>
      <div className={styles.productContainer}>
        <img src={imageSrc} alt="Product Image"></img>
        <div className={styles.content}>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>
            $
            {Number(
              props.data.shopifyProduct.priceRange.maxVariantPrice.amount
            ).toFixed(2)}
          </p>
          <p className={styles.description}>{props.data.shopifyProduct.description}</p>
          
          <AddToCart variantId={variantId} />
        </div>
      </div>
    </Layout>
  )
}

export default Product
