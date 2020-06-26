import React, {useContext, useEffect, useState} from "react"
import { graphql, Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import styles from "../styles/product.module.scss"
import Img from "gatsby-image"
import warnIcon from "../img/exclamation-red.svg"
import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    allShopifyCollection(
      filter: { handle: { eq: $slug } }
      sort: { fields: id }
    ) {
      nodes {
        title
        handle
        products {
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
          title
          vendor
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
`
const ProductsList = props => {
  const { updateProductList, productList } = useContext(StoreContext)
  let collection;
  let vendorList;

  const getCollection = () => {
    collection = props.data.allShopifyCollection.nodes[0].products.sort(
      (a, b) =>
        a.vendor.toLowerCase() > b.vendor.toLowerCase()
          ? 1
          : a.vendor.toLowerCase() < b.vendor.toLowerCase()
          ? -1
          : 0
    )
  }

const getVendorList = (products) => {
  let vendorArray = products.map(item => item.vendor)
  vendorList = [...new Set(vendorArray)]
}
 

  useEffect(() => {
    getCollection()
    updateProductList(collection)
    getVendorList(collection);
  }, [collection])

 
  
 
  return (
    <Layout>
      <button onClick={()=>{updateProductList(productList)}}>Test Collection Filter</button>
      <div id={styles.Showcase}>
        <div className={styles.showcaseContent}>
          <h1>{props.data.allShopifyCollection.nodes[0].title}</h1>
          <p>Shop our collection of ocean-inspired products.</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {productList ? (
            productList.map(item => {
              return (
                <div className={styles.productImage} key={item.shopifyId}>
                  <div>
                    <Link to={`/products/${item.handle}`}>
                      <div className={styles.gridImageContainer}>
                        <Img
                          className={styles.gridImage}
                          fluid={item.images[0].localFile.childImageSharp.fluid}
                        ></Img>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.content}>
                    <div>
                      <div className={styles.titleContainer}>
                        <h4 className={styles.productDesc}>{item.title}</h4>
                        {item.availableForSale ? (
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
                      <p className={styles.productDesc}>
                        $
                        {Number(item.priceRange.maxVariantPrice.amount).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ProductsList
