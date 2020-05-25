import React from "react"
import { Link } from "gatsby"
import styles from "../styles/footer.module.scss"
import instagram from "../img/instagram-white.svg"
import facebook from "../img/facebook.svg"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.social}>
          <a href="https://www.facebook.com/shopsandpeople/" target="_blank">
            <img src={facebook}></img>
          </a>
          <a
            href="https://www.instagram.com/sandpeoplehi/?hl=en"
            target="_blank"
          >
            <img src={instagram}></img>
          </a>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2020 Sand People</p>
          <div className={styles.returnPolicyContainer}></div>
        </div>

        <div className={styles.footerPages}>
          <Link to="/returns" className={styles.returnPolicyLink}>Return Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
