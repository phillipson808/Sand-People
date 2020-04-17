import React, { useContext, useEffect, useState } from "react"
import { StoreContext } from "../context/StoreContext"
import { animated } from "react-spring"
import styles from "../styles/cart.module.scss"
import cardIcon from "../img/cc-icon-white.svg"

const Cart = ({ style, qty }) => {
  //Style is the prop that is being passed in to create animation.
  //Shopify test card #: 4242424242424242
  const {
    checkout,
    addProductToCart,
    removeQuantityFromCart,
    checkIfCartEmpty,
  } = useContext(StoreContext)

  const [cartEmpty, setCartEmpty] = useState(true)
  let isCartEmpty = true

  useEffect(() => {
    if (checkout.lineItems.length !== 0) {
      setCartEmpty(false)
    } else {
      setCartEmpty(true)
    }
    console.log("is cart empty", isCartEmpty)
  })

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
      <div className={styles.blah}>
        <div className={styles.itemContainer}>
          <div className={cartEmpty ? styles.hide : styles.show}>
            {checkout.lineItems.map(item => {
              console.log(checkout.lineItems)
              return (
                <div key={item.id} className={styles.cartItemContainer}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageTitle}>
                      <img
                        src={item.variant.image.src}
                        alt="Product Image"
                        className={styles.productImage}
                      ></img>
                      <div className={styles.titleContainer}>
                        <p>{item.title}</p>
                        <table className={styles.table}>
                          <tbody>
                            <tr>
                              <td
                                className={styles.qtybtn}
                                onClick={() => {
                                  removeQuantityFromCart(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }}
                              >
                                -
                              </td>
                              <td className={styles.qty}>{item.quantity}</td>
                              <td
                                className={styles.qtybtn}
                                onClick={() => {
                                  addProductToCart(item.variant.id)
                                }}
                              >
                                +
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <p>${Number(item.variant.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className={styles.ruler}></div>

            <div className={styles.quantityContainer} id={styles.hide}>
              <p>Cart Quantity: {qty}</p>
              <p>Subtotal: ${checkout.totalPrice}</p>
              <a
                href={checkout.webUrl}
                className={styles.checkoutButton}
                target="_blank"
              >
                <div className={styles.checkoutContainer}>
                  <img src={cardIcon} width="20px"></img>
                  <span>Checkout</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Cart
