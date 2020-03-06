import React, { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { animated } from "react-spring"

const Cart = ({ style }) => {
  //Style is the prop that is being passed in to create animation.
  const { isCartOpen, checkout, toggleCartOpen, deleteProductFromCart} = useContext(StoreContext)
  console.log(checkout)
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        background: "grey",
        boxShadow: "var(--elevation-4)",
        padding: 60,
        ...style,
      }}
    >
      <button onClick={toggleCartOpen}>Close Cart</button>

      <h3>Cart</h3>
      {checkout.lineItems.map(item => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>${Number(item.variant.price).toFixed(2)}</p>
            <p>{item.quantity}</p>
            <button onClick={() => {
              deleteProductFromCart(item.id)
            }}>Remove</button>
          </div>
        )
      })}
      <hr />
      <p>Total: ${checkout.totalPrice}</p>
      <a href={checkout.webUrl} target='_blank'>Checkout</a>
    </animated.div>
  )
}

export default Cart
