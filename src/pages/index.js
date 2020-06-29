import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.scss"
import { Link } from "gatsby"

const Home = () => {
  return (
    <Layout>
      <div id={styles.Home}>
        <div id={styles.Showcase}>
          <div className={styles.warningHeader}>
            <p>
              Aloha! Our site will not accept payments until July 4th, 2020 but feel
              free to browse!
            </p>
          </div>
          <div className={styles.title}>
            <h1>E Komo Mai</h1>
            <p>
              Welcome to Sand People. A Hawaii based company that has been
              curating gifts and locally made jewelry for over 30 years.
            </p>
            <Link to="/products">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.giftsShowcase}>
            <div className={styles.giftsTitle}>
              <h1>Gifts</h1>
              <p>Shop our unique gifts that invoke our island lifestyle.</p>
              <Link to="/products/collections/gifts">
                <button className={styles.showcaseButton}>Shop Gifts</button>
              </Link>
            </div>
          </div>

          <div className={styles.jeweleryShowcase}>
            <div className={styles.giftsTitle}>
              <h1>Jewelry</h1>
              <p>Hand crafted jewelry made in Hawaii with Aloha.</p>
              <Link to="/products/collections/jewelry">
                <button className={styles.showcaseButton}>Shop Jewelry</button>
              </Link>
            </div>
          </div>
          <div className={styles.locationsShowcase}>
            <div className={styles.giftsTitle}>
              <h1>Locations</h1>
              <p>Visit our shops on Oahu, Maui, and Kauai.</p>

              <Link to="/locations">
                <button className={styles.showcaseButton}>
                  View Locations
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.ourstory}>
            <div className={styles.giftsTitle}>
              <h1>Our Story</h1>
              <p>
                Home grown amongst the taro patches and natural beauty of
                Hanalei.
              </p>
              <Link to="/about">
                <button className={styles.showcaseButton}>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
