import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import { animated } from "react-spring"
import styles from "../styles/cart.module.scss"
import cardIcon from "../img/cc-icon-white.svg"
import emptyCartIcon from "../img/emptycart-icon.png"

const Cart = ({ style, qty }) => {
  //Style is the prop that is being passed in to create animation.
  //Shopify test card #: 4242424242424242
  const { checkout, addProductToCart, removeQuantityFromCart } = useContext(
    StoreContext
  )

  const [cartEmpty, setCartEmpty] = useState(true)

  useEffect(() => {
    if (checkout.lineItems.length !== 0) {
      setCartEmpty(false)
    } else {
      setCartEmpty(true)
    }
  })

  return (
    <animated.div
      style={{
        ...style,
      }}
      className={[styles.container]}
    >
      <div className={cartEmpty ? styles.hide : styles.show}>
        <h3 id={styles.header}>Your Cart</h3>
      </div>
      <div>
        <div className={styles.itemContainer}>
          <div className={cartEmpty ? styles.hide : styles.show}>
            <div className={styles.productContainer}>
              {checkout.lineItems.map(item => {
                return (
                  <div key={item.id} className={styles.cartItemContainer}>
                    <div className={styles.imageContainer}>
                      <div className={styles.imageTitle}>
                        <div className={styles.thumbnail}>
                          <img
                            src={item.variant.image.src}
                            alt="Product Image"
                            className={styles.productImage}
                          ></img>
                        </div>
                        <div className={styles.titleContainer}>
                          <p>{item.title}</p>
                          <div className={styles.itemPrice}>
                            <p>${Number(item.variant.price).toFixed(2)}</p>
                          </div>
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
                                    addProductToCart(item.variant.id, 1)
                                  }}
                                >
                                  +
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={styles.ruler}></div>

            <div className={styles.quantityContainer}>
              <p className={styles.totalqty}>Cart Quantity: {qty}</p>
              <p className={styles.subtotal}>
                Subtotal: ${checkout.totalPrice}
              </p>
              <Link
                to="/shoppingcart"
                target="_blank"
                className={styles.cartLink}
              >
                <div className={styles.viewCart}>
                  <p className={styles.cartLinkText}>View Cart</p>
                </div>
              </Link>
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
          <div
            className={cartEmpty ? styles.show : styles.hide}
            id={styles.emptyCartContainer}
          >
            <div
              className={cartEmpty ? styles.emptyCart : styles.hideEmptyCart}
              id={styles.emptyCart}
            >
              <img
                src={emptyCartIcon}
                alt="hula icon"
                className={styles.hulaIcon}
              />
              <h3>Aloha.</h3>
              <p>It looks like your cart is still empty.</p>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Cart
