import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/locations.module.scss"
import phone from "../img/phone.svg"
import oahuImage from "../img/moke.jpg"
import kauaiImage from "../img/kauai.jpg"
import mauiImage from "../img/maui.jpg"

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
              src={oahuImage}
              alt="Oahu"
              className={styles.islandImage}
            ></img>
          </div>

          <div className={styles.islandTextContainer}>
            <h1>Oahu</h1>
            <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
              <div className={styles.address}>
                <h3>Sand People Kailua</h3>
                <p>600 Kailua Road #118, Kailua, HI 96734</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-261-8878">(808) 261-8878</a>
                </div>
                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand Kids Kailua</h3>
                <p>600 Kailua Road #117, Kailua, HI 96734</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-261-4689">(808) 261-4689</a>
                </div>

                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand People Ala Moana</h3>
                <p>
                  <i>*Ala Moana Shopping Center</i>
                </p>
                <p>
                  <br /> Ala Moana Blvd, Space 2254 Honolulu, HI 96814
                </p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-955-8883">(808) 955-8883</a>
                </div>
                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>

              <div className={styles.address}>
                <h3>Sand People Haleiwa</h3>
                <p>66-249 Kamehameha Hwy, Haleiwa, HI 96712</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-637-3373">(808) 637-3373</a>
                </div>
                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>

              <div className={styles.address}>
                <h3>Sand People Int'l Marketplace</h3>
                <p>
                  <i>*International Marketplace</i>
                </p>
                <br />
                <p>2330 Kalakaua Avenue #207, Honolulu, HI 96815</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-800-3314">(808) 800-3314</a>
                </div>
                <a href="https://compressor.io/compress" target="_blank">
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default locations
