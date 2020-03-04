import React, { useContext } from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { StoreContext } from '../context/StoreContext'
import AddToCart from '../components/AddToCart';


export const query = graphql`
  query($slug: String!) {
    shopifyProduct(handle: { eq: $slug }) {
      handle
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
  let variantId = props.data.shopifyProduct.variants[0].shopifyId;

  return (
    <Layout>
      <h1>{props.data.shopifyProduct.title}</h1>
      <p>${Number(props.data.shopifyProduct.priceRange.maxVariantPrice.amount).toFixed(2)}</p>
      <p>{props.data.shopifyProduct.description}</p>
      <AddToCart variantId={variantId} />
    </Layout>
  )
}

export default Product
