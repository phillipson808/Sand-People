import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../styles/returns.module.scss"

const Returns = () => {
  return (
    <Layout>
      <div id={styles.container}>
        <h1>Sand People Return Policy</h1>
        <div className={styles.contentBlock}>
          <h4>General Returns</h4>
          <p>
            All items can be returned within 30 days of original purchase. The purchased items must be returned in the condition they were received in. To request a return please send an email to info@sandpeople.com along with your order number. Your order number is available at checkout and in the confirmation email you receive after you place an order.
          </p>
        </div>
        <div className={styles.contentBlock}>
          <h4>Damaged Items</h4>
          <p>
            Please email info@sandpeople.com with your order number if an item
            arrives in damaged condition. Your order number is available at checkout and in the confirmation email you receive after you place an order.
          </p>
        </div>
        <div className={styles.contentBlock}>
        <h4>Other Purchase Inquiries</h4>
        <p>
          Please feel free to reach out to us at anytime via info@sandpeople.com if you have questions that are not clarified on the site. Mahalo!
        </p>
      </div>
      </div>
    </Layout>
  )
}

export default Returns
