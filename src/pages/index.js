import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.scss"
import { Link } from "gatsby"

const Home = () => {
  return (
    <Layout>
      <div id={styles.Home}>
        <div id={styles.Showcase}>
          <div className={styles.title}>
            <h1>E Komo Mai</h1>
            <p>
              Welcome to Sand People. Coastal lifestyle boutiques for relaxed
              living.
            </p>
            <Link to="/products">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.locationsShowcase}>
            <div className={styles.giftsTitle}>
              <h1>Locations</h1>
              <p>View our locations on Oahu, Kauai, and Maui.</p>

              <Link to="/locations">
                <button className={styles.showcaseButton}>
                  View Locations
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.giftsShowcase}>
            <div className={styles.giftsTitle}>
              <h1>Gifts</h1>
              <p>
                Find gifts for every occasion with our diverse collection of
                ocean inspired products.
              </p>
              <Link to="/gifts">
                <button className={styles.showcaseButton}>Shop Gifts</button>
              </Link>
            </div>
          </div>
          <div className={styles.jeweleryShowcase}>
            <div className={styles.giftsTitle}>
              <h1>Jewelry</h1>
              <p>
                Find gifts for every occasion with our diverse collection of
                ocean inspired products.
              </p>
              <Link to="/jewelry">
                <button className={styles.showcaseButton}>Shop Jewelry</button>
              </Link>
            </div>
          </div>
          <div className={styles.ourstory}>
            <div className={styles.giftsTitle}>
              <h1>Our Story</h1>
              <p>
                Find gifts for every occasion with our diverse collection of
                ocean inspired products.
              </p>
              <Link to="/products">
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
