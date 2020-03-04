import React from "react"
import Head from "../components/Head"
import Cart from '../containers/Cart'

const Layout = props => {

  return (
      <div>
        <Head />
        <Cart />
        {props.children}
      </div>
  )
}

export default Layout