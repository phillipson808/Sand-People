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
          <h1>Locations</h1>
          <div className={styles.locations}>
            <div className={styles.islandContainer}>
              <div className={styles.island} id={styles.kauai}></div>
              <Link to="/kauai">
                <button className={styles.showcaseButton}>Kauai</button>
              </Link>
            </div>
            <div className={styles.islandContainer}>
              <div className={styles.island} id={styles.oahu}></div>
              <Link to="/oahu">
              <button className={styles.showcaseButton}>Oahu</button>
            </Link>
            </div>
            <div className={styles.islandContainer}>
              <div className={styles.island} id={styles.maui}></div>
              <Link to="/maui">
                <button className={styles.showcaseButton}>Maui</button>
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
              <Link to="/products">
                <Link to="/">
                  <button className={styles.showcaseButton}>Shop Gifts</button>
                </Link>
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
              <Link to="/products">
                <Link to="/">
                  <button className={styles.showcaseButton}>
                    Shop Jewelry
                  </button>
                </Link>
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
                <Link to="/">
                  <button className={styles.showcaseButton}>Learn More</button>
                </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
