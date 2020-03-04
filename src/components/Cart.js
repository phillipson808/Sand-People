import React, { useContext } from "react"
import { StoreContext } from '../context/StoreContext'

const Cart = () => {
  const { isCartOpen, addProductToCart } = useContext(StoreContext)
  return (
    <div>
      <button>Cart</button>
    </div>
  )
}


export default Cart