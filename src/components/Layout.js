import React from "react"
import Head from "./Head"
import Nav from "./Nav"
import Footer from "./Footer"
import styles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.contentContainer}>
      <Head />
      
      <Nav />
      <div className={styles.contentContainer}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
