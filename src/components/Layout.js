import React, { useContext } from "react"
import Head from "./Head"
import Nav from './Nav'
import { StoreContext } from '../context/StoreContext'

const Layout = props => {
  const { isCartOpen, addProductToCart, client } = useContext(StoreContext)
  return (
      <div>
        <Head />
        <Nav />
        {props.children}
      </div>
  )
}

export default Layout