import React from "react"
import { graphql } from 'gatsby'
import client from '../app/client'
import Layout from '../app/components/Layout'


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
let checkout =  client.checkout.create().then((checkout) => {
  console.log('checkout', checkout)
})

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
