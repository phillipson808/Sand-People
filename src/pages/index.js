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
              <button>Kauai</button>
            </div>
            <div  className={styles.islandContainer}>
            <div className={styles.island} id={styles.oahu}></div>
            <button>Oahu</button>
            </div>
            <div  className={styles.islandContainer}>
            <div className={styles.island} id={styles.maui}></div>
            <button>Maui</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
