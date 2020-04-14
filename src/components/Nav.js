import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/StoreContext"
import { Link } from "gatsby"
import Cart from "./Cart"
import { useTransition } from "react-spring"
import styles from "../styles/nav.module.scss"
import logo from "../img/sp-logo.svg"
import cartImage from "../img/SP-cart-icon.svg"

const Nav = () => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)
  const cartTransitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(100%, 0, 0)" },
  })

  let qty

  if (checkout) {
    qty = checkout.lineItems.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  } else {
    qty = 0
  }

  const getQty = () => {
    qty = checkout.lineItems.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  useEffect(() => {
    getQty()
  }, [])

  return (
    <div>
      <nav id={styles.Nav}>
        <img src={logo} alt="logo" className={styles.logo}></img>
        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products">Locations</Link>
          </li>
          <li>
            <Link to="/products">About</Link>
          </li>
          <li>
              <div className={styles.cartIconContainer}>
                <button className={styles.cartIcon} onClick={toggleCartOpen}>
                    <img src={cartImage} alt="Cart Icon"></img>
                    <p className={styles.itemqty}>{qty}</p>
                </button>
              </div>
          </li>
        </ul>
      </nav>
      {cartTransitions.map(({ item, key, props }) => {
        //Item takes place of isCartOpen boolean
        return item && <Cart key={key} style={props} />
      })}
    </div>
  )
}

export default Nav
