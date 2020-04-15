import React, { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { animated } from "react-spring"
import styles from "../styles/cart.module.scss"
import cardIcon from "../img/cc-icon-white.svg"

const Cart = ({ style, qty }) => {
  //Style is the prop that is being passed in to create animation.
  //Shopify test card #: 4242424242424242
  const { checkout, toggleCartOpen, deleteProductFromCart, addProductToCart, removeQuantityFromCart } = useContext(
    StoreContext
  )

  return (
    <animated.div
      style={{
        ...style,
      }}
      className={[styles.container]}
    >
      {console.log(StoreContext)}
      <div className={styles.header}>
        <h3>Your Cart</h3>
      </div>
      <button onClick={toggleCartOpen} className={styles.close}>
        X
      </button>
      <div className={styles.itemContainer}>
        <div>
          {checkout.lineItems.map(item => {
            console.log(checkout.lineItems)
            return (
              <div key={item.id} className={styles.cartItemContainer}>
                <div className={styles.imageContainer}>
                  <img
                    src={item.variant.image.src}
                    alt="Product Image"
                    className={styles.productImage}
                  ></img>
                  <div>
                    <p>${Number(item.variant.price).toFixed(2)}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                </div>
                <p>{item.title}</p>
      
                <button
                  onClick={() => {
                    deleteProductFromCart(item.id)
                  }}
                  className={styles.removeButton}
                >
                  Remove
                </button>

                <button
                  onClick={() => {
                    addProductToCart(item.variant.id)
                  }}
                  className={styles.addButton}
                >
                  Add
                </button>
                <button
                onClick={() => {
                  removeQuantityFromCart(item.id, item.quantity-1)
                }}
              >
                Subtract
              </button>
              </div>
            )
          })}
        </div>
        <div className={styles.ruler}></div>
        <p>{qty} Items</p>
        <p>Subtotal: ${checkout.totalPrice}</p>
      </div>
      <a
        href={checkout.webUrl}
        className={styles.checkoutButton}
        target="_blank"
      >
        <img src={cardIcon} width="20px"></img>
        <span>Checkout</span>
      </a>
    </animated.div>
  )
}

export default Cart
