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
          <p>
            <h4>General Information</h4>
            Regular priced merchandise in new and unused condition may be
            exchanged or returned for store credit within 14 days of receipt of
            purchase. We do not issue refunds. Store credits do not expire and
            are available to use in any of our brick and mortar locations. All
            sales are FINAL on Sale/discounted merchandise, jewelry, bath & body
            and customized/made to order products. These items are not eligible
            for an exchange or return of any type. International sales of any
            kind are a final sale. In-Store returns for store credit or
            exchanges are also welcome at any of our brick and mortar locations.
            Same terms as stated above will apply. Please present your order
            confirmation so our sales associate can better assist you with your
            transaction.
          </p>{" "}
        </div>
        <div className={styles.description}>
          <h4>Shipping</h4>
          <p>
            Currently we are only shipping the most cost effective way through
            the United States Postal Service (USPS) for domestic and
            international shipments. Processing time for most orders is between
            2-4 business days. Should there be a delay beyond that time frame,
            we will reach out to you through the form of contact provided.
            Shipping rates are calculated based on weight and dimension of
            packages according to zip code. You will be presented with available
            options to you for delivery to your provided address at checkout.
            Shipping times are dependent on your selection and should state the
            estimated time frame. Tracking information will be emailed to the
            provided email address when it is available and ready for shipment.
            Any free shipping promotions will be shipped via First Class Mail or
            the best cost effective alternative. Please fill out our{" "}
            {<Link to="/contact">contact form</Link>} with your order number if
            an item arrives in damaged condition. Your order number is available
            at checkout and in the confirmation email you receive after you
            place an order.
            <br/>
            <br/>
            <strong>Please note that Sand People is not responsible for any taxes, duties or fees associated with international shipments. If you have any concerns about what those would be, please contact your local post office ahead of time to inquire what your country import duties would be.</strong>
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
