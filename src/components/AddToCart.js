import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const AddToCart = ({variantId, qty}) => {
  const { addProductToCart } = useContext(StoreContext)
  return (
    <button onClick={() => addProductToCart(variantId, qty)}>Add to Cart</button>
  )
}

export default AddToCart