import React from "react"
import styles from '../styles/productpage.module.scss'
import warnIcon from "../img/exclamation-red.svg"


const isAvailable = available => {
  if (available === true) {
    return
  } else {
    return (
      <div className={styles.warningContainer}>
      <img
        src={warnIcon}
        className={styles.warnIcon}
        alt="Warning Icon"
      ></img>
      <p className={styles.soldOut}>Sold Out</p>
    </div>
    )
  }
}

export default isAvailable
