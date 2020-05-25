import React from "react"
import styles from "../styles/returns.module.scss"
import { Link } from "gatsby"

const Policy = () => {
  return (
    <div id={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.formBackground}>
        <h2>Return Policy</h2>
        <div className={styles.description}>
          <h4>General Returns</h4>
          <p>
            All items can be returned within 30 days of original purchase. The
            purchased items must be returned in the condition they were received
            in. To request a return please send an email to info@sandpeople.com
            along with your order number. Your order number is available at
            checkout and in the confirmation email you receive after you place
            an order.
          </p>{" "}
        </div>
        <div className={styles.description}>
          <h4>Damaged Items</h4>
          <p>
            Please fill out our {<Link to="/contact">contact form</Link>} with
            your order number if an item arrives in damaged condition. Your
            order number is available at checkout and in the confirmation email
            you receive after you place an order.
          </p>{" "}
        </div>

        <div className={styles.description}>
          <h4>Have a question waiting to be answered?</h4>
          <p>
            Please feel free to reach out to us at anytime via our{" "}
            {<Link to="/contact">contact form</Link>} or email us at
            info@sandpeople.com. Mahalo!
          </p>{" "}
        </div>
       </div>
    </div>
  )
}

export default Policy
