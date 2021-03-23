import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/locations.module.scss"
import phone from "../img/phone.svg"



const locations = () => {
  return (
    <Layout>
     
      {/*Main Showcase*/}
      <div id={styles.Showcase}>
        <div className={styles.showcaseContent}>
          <h1>Locations</h1>
          <p>Visit our shops on Oahuand Kauai.</p>
        </div>
      </div>
      {/*Island Containers*/}
      {/*Oahu*/}
      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
       

         
        </div>
      </div>

      {/*Maui*/}
      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
          <div className={styles.mauiImageContainer}></div>

          <div className={styles.islandTextContainer}>
            <h1>Maui</h1>
            <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
        
              
              <div className={styles.address}>
                <h3>Sand People Lahaina</h3>
                <p>762 Front Street, Lahaina, HI 96761</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-662-8781">(808) 662-8781</a>
                </div>
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&tbm=lcl&sxsrf=ALeKk01Hwwn4cvIAdq4BoAcB5av2QibJPA%3A1588704877031&ei=bbaxXtSoAYTh9AO95IKwCw&q=sand+people+lahaina&oq=sand+people+lahaina&gs_l=psy-ab.3..35i39k1.40566.42708.0.42759.19.18.0.0.0.0.164.2150.7j11.18.0....0...1c.1.64.psy-ab..1.18.2147...0j0i67k1j0i20i263k1j0i10k1j0i131i20i263k1j0i273k1j0i131k1j0i131i273k1.0.D-Moi1_R7Hk#rlfi=hd:;si:2296123067477022504;mv:[[20.881326495655887,-156.6741706930847],[20.869858403414288,-156.6960360609741],null,[20.8755925589614,-156.6851033770294],16]"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Kauai*/}
      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
          <div className={styles.kauaiImageContainer}></div>

          <div className={styles.islandTextContainer}>
            <h1>Kauai</h1>
            <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
         
             
            
              <div className={styles.address}>
                <h3>Sand People Hanalei</h3>
                <p>5-5161 Kuhio Highway PO Box 870, Hanalei, HI 96714</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-826-1008">(808) 826-1008</a>
                </div>
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&biw=971&bih=717&tbm=lcl&sxsrf=ALeKk03PzCKJH3C4TmIPmqnCpoMw_1uG8A%3A1588705179125&ei=m7exXqyYB9q60PEPxpeFUA&q=sand+people+hanalei&oq=sand+people+hanalei&gs_l=psy-ab.3..35i39k1.180876.182827.0.182951.19.18.0.0.0.0.168.1920.4j12.16.0....0...1c.1.64.psy-ab..3.16.1918...0j0i67k1j0i131k1j0i273k1j0i20i263k1j0i131i273k1j0i10k1.0.0pJmrIiyq88#rlfi=hd:;si:4667756901923447813;mv:[[22.20270727731903,-159.49644210937785],[22.20234732268097,-159.49683089062214]]"
                  target="_blank"
                >
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
