import React from "react"
import Head from "./Head"
import Nav from './Nav'
import Footer from './Footer'

const Layout = props => {
  return (
      <div>
        <Head />
        <Nav />
        {props.children}
        <Footer />
      </div>
  )
}

export default Layout