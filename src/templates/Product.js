import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


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
      }
      productType
      description
    }
  }
`

const Product = props => {
  return (
    <Layout>
      <h1>{props.data.shopifyProduct.title}</h1>
      <p>${Number(props.data.shopifyProduct.priceRange.maxVariantPrice.amount).toFixed(2)}</p>
      <p>{props.data.shopifyProduct.description}</p>
      <button>Add to Cart</button>
    </Layout>
  )
}

export default Product
