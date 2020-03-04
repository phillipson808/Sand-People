import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const AddToCart = ({variantId}) => {
  const { addProductToCart } = useContext(StoreContext)
  return (
    <button onClick={() => addProductToCart(variantId)}>Add to Cart</button>
  )
}

export default AddToCart