import React, { useContext, useState } from "react"
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
  const { removeQuantityFromCart, addProductToCart, addtoQty } = useContext(StoreContext)

  const [qty, setAddQty] = useState(1);

  let variantId = props.data.shopifyProduct.variants[0].shopifyId
  console.log("Props", props.data.shopifyProduct)
  let imageSrc = props.data.shopifyProduct.images[0].localFile["childImageSharp"].fluid.src
  



  return (
    <Layout>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt="Product Image"></img>
        </div>
        <div className={styles.content}>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>
            $
            {Number(
              props.data.shopifyProduct.priceRange.maxVariantPrice.amount
            ).toFixed(2)}
          </p>
          <div className={styles.cartandquantity}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.qtybtn} onClick={() => {
                    if(qty>1) {setAddQty(qty-1)} else{return;}
                  
                  }}>-</td>
                  <td className={styles.qty}>{qty}</td>
                  <td className={styles.qtybtn} onClick={() => {setAddQty(qty+1)}}>+</td>
                </tr>
              </tbody>
            </table>
            <AddToCart variantId={variantId} qty={qty} className={styles.button} />
          </div>
          <p className={styles.description}>
            {props.data.shopifyProduct.description}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Product
