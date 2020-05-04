import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/locations.module.scss"
import phone from "../img/phone.svg"
import oahuImage from "../img/moke.jpg"
import kauaiImage from '../img/kauai.jpg'
import mauiImage from '../img/maui.jpg'

const locations = () => {
  return (
    <Layout>
      {/*Main Showcase*/}
      <div id={styles.Showcase}>
        <div className={styles.showcaseContent}>
          <h1>Locations</h1>
          <p>View our locations on Kauai, Maui, and Oahu.</p>
        </div>
      </div>

      {/*Island Containers*/}

      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
          <div className={styles.islandImageContainer}>
            <img
              src={kauaiImage}
              alt="Oahu"
              className={styles.islandImage}
            ></img>
          </div>
    
          <div className={styles.islandTextContainer}>
          <h1>Kauai</h1>
          <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
              <div className={styles.address}>
                <h3>The Shops at Kukuiula</h3>
                <p>2829 Ala Kalanikaumaka St. #G141</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <p>(808) 826-1008</p>
                </div>
                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>The Shops at Kukuiula</h3>
                <p>2829 Ala Kalanikaumaka St. #G141</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <p>(808) 826-1008</p>
                </div>

                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
            </div>
            <div className={styles.address}>
              <h3>Hanalei</h3>
              <p>5-5161 Kuhio Hwy #108, Hanalei, HI 96714</p>
              <div className={styles.phoneContainer}>
                <img src={phone}></img>
                <p>(808) 826-1008</p>
              </div>
              <a href="https://compressor.io/compress" target="_blank">
                <button className={styles.directionsbtn}>Directions</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default locations
