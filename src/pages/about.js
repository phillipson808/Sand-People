import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../styles/about.module.scss"
import van from "../img/van.svg"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.showcase}>
          <div className={styles.title}>
            <h1>Our Story</h1>
            <p>Home grown amongst the taro patches and natural beauty of Hanalei.</p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
              
            <div className={styles.imageContainer}>
              <img src={van} alt="Volkswagen Van"></img>
            </div>
            <div className={styles.contentBlockOne}>
              <h3>
                Sand People is a coastal lifestyle brand that encompasses the
                spirit of Hawaii and the unique experience that the islands have
                to offer.
              </h3>
              <p>
                By supporting an array of local artisans and independently owned
                brands, Sand People brings a unique and genuine collection of
                goods to those who are happiest with their toes in the sand.
                Whether you’re local or just visiting, we’ll make sure you bring
                something special to the place you call home.
              </p>
            </div>
        

            <div className={styles.contentBlockTwo}>
              <h3>
                Sand People began as a small surf shop in what was then the
                quiet town of Hanalei, Kauai in 1986.
              </h3>
              <p>
                As competing storefronts appeared in nearby areas, the brand
                began to evolve into what you see today. Over the years, the
                brand made its way to the south side of Kauai and eventually to
                the neighboring islands of Oahu and Maui. The brand currently
                boasts twelve locations and a friendly Ohana of like-minded
                individuals.
              </p>
            </div>

            <div className={styles.contentBlockTwo}>
          
          </div>
          </div>
        </div>
      </Layout>
    )
  }
}
