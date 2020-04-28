import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/maui.module.scss"
import phone from '../img/phone.svg'

const maui = () => {
  return (
    <Layout>
      <div className={styles.kauai}>
        <div className={styles.container}>
          <div className={styles.image}></div>
          <div className={styles.locations}>
            <div className={styles.location}>
              <h2>The Shops at Kukuiula</h2>
              <p>2829 Ala Kalanikaumaka St #G141 Koloa, HI 96756</p>
              <div className={styles.locationcontent}>
              <img src={phone}/><p className={styles.phone}>(808) 742-2888</p>
              </div>
            </div>
            <div className={styles.location}>
              <h2>Hanalei</h2>
              <p>5-5161 Kuhio Hwy # 108, Hanalei, HI 96714</p>
              <div className={styles.locationcontent}>
              <img src={phone}/><p className={styles.phone}>(808) 826-1008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default maui
