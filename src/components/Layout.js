import React from "react"
import Head from "./Head"
import Nav from './Nav'

const Layout = props => {

  return (
      <div>
        <Head />
        <Nav />
        {props.children}
      </div>
  )
}

export default Layout