import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/locations.module.scss"
import phone from "../img/phone.svg"

const locations = () => {
  return (
    <Layout>
      {/*Showcase*/}
      <div className={styles.showcase}>
        <div className={styles.showcaseContent}>
          <h1>Locations</h1>
          <p>
            We're proud to offer multiple locations on the islands of Maui,
            Oahu, and Kauai.
          </p>
        </div>
      </div>
      {/*Content*/}

      {/*Kauai*/}
      <div className={styles.locationsContainer}>
        <div className={styles.kauai}>
          <div className={styles.kauaiImage}></div>
          <div className={styles.locationsContent}>
            <h1>Kauai</h1>
            <h2>The Shops at Kukuiula</h2>
            <p>2829 Ala Kalanikaumaka St #G141 Koloa, HI 96756</p>
            <div className={styles.locationPhone}>
              <img src={phone} />
              <p className={styles.phone}>(808) 742-2888</p>
            </div>
            <div className={styles.hanalei}>
              <h2>Hanalei</h2>
              <p>5-5161 Kuhio Hwy # 108, Hanalei, HI 96714</p>
              <div className={styles.locationPhone}>
                <img src={phone} />
                <p className={styles.phone}>(808) 826-1008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Oahu*/}
      <div className={styles.locationsContainer}>
        <div className={styles.kauai}>
          <div className={styles.oahuImage}></div>
          <div className={styles.locationsContent}>
            <h1>Oahu</h1>
            <h2>The Shops at Kukuiula</h2>
            <p>2829 Ala Kalanikaumaka St #G141 Koloa, HI 96756</p>
            <div className={styles.locationPhone}>
              <img src={phone} />
              <p className={styles.phone}>(808) 742-2888</p>
            </div>
            <div className={styles.hanalei}>
              <h2>Hanalei</h2>
              <p>5-5161 Kuhio Hwy # 108, Hanalei, HI 96714</p>
              <div className={styles.locationPhone}>
                <img src={phone} />
                <p className={styles.phone}>(808) 826-1008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Maui*/}
      <div className={styles.locationsContainer}>
        <div className={styles.kauai}>
          <div className={styles.kauaiImage}></div>
          <div className={styles.locationsContent}>
            <h1>Maui</h1>
            <h2>The Shops at Kukuiula</h2>
            <p>2829 Ala Kalanikaumaka St #G141 Koloa, HI 96756</p>
            <div className={styles.locationPhone}>
              <img src={phone} />
              <p className={styles.phone}>(808) 742-2888</p>
            </div>
            <div className={styles.hanalei}>
              <h2>Hanalei</h2>
              <p>5-5161 Kuhio Hwy # 108, Hanalei, HI 96714</p>
              <div className={styles.locationPhone}>
                <img src={phone} />
                <p className={styles.phone}>(808) 826-1008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default locations
