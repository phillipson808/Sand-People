import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/contact.module.scss"

const ContactForm = () => {
  return (
    <Layout>
      <div id={styles.container}>
        <div className={styles.imageContainer}></div>
        <div className={styles.formBackground}>
          <h2>Contact Us</h2>
          <div className={styles.description}>
          <p>For general inquiries, you can also reach us at info@sandpeople.com. Mahalo!</p>
          </div>
          <div className={styles.formContainer}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className={styles.form}
            >
              <div className={styles.labelContainer}>
                <div>
                  <label>
                    <input type="text" name="name" placeholder="Name" />
                  </label>
                  <br />
                  <label>
                    <input type="email" name="email" placeholder="Email" />
                  </label>
                </div>
                <div className={styles.message}>
                  <label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      className={styles.textarea}
                    ></textarea>
                  </label>
                </div>
              </div>
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactForm
