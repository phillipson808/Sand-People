import React, { useContext, useEffect } from "react"
import { StoreContext } from "../context/StoreContext"
import { Link } from "gatsby"
import Cart from "./Cart"
import { useTransition } from "react-spring"
import styles from "../styles/nav.module.scss"
import logo from "../img/sp-logo.svg"
import cartImage from "../img/SP-cart-icon.svg"
import arrow from "../img/arrow-down.svg"

const Nav = () => {
  const {
    isCartOpen,
    toggleCartOpen,
    checkout,
    toggleDisplay,
    showDisplay,
  } = useContext(StoreContext)
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
    if (isCartOpen === true) {
      toggleCartOpen()
    }
  }, [])

  return (
    <div>
      <nav id={styles.mobileNav}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo}></img>
        </Link>
        <div onClick={toggleDisplay} className={styles.hamburger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

          <ul
            className={styles.mobileLinks}
            id={showDisplay ? styles.show : styles.hide}
          >
            <div className={styles.closeContainer} onClick={toggleDisplay}>
              <div className={styles.close}>
                <p>X</p>
              </div>
            </div>
            <li>
              <Link to="/" onClick={toggleDisplay}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleDisplay}>
                All Products
              </Link>
            </li>
            <li>
              <Link to="/gifts" onClick={toggleDisplay}>
                Gifts
              </Link>
            </li>
            <li>
              <Link to="/jewelry" onClick={toggleDisplay}>
                Jewelry
              </Link>
            </li>
            <li>
              <Link to="/locations" onClick={toggleDisplay}>
                Locations
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleDisplay}>
                About
              </Link>
            </li>
            <li>
              <Link to="/shoppingcart" onClick={toggleDisplay}>
                Cart
              </Link>
            </li>
          </ul>
      </nav>

      <div id={styles.NavContainer}>
        <nav id={styles.Nav}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo}></img>
          </Link>
          <ul className={styles.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className={styles.dropdownContainer}>
                <Link to="/products" id={styles.productsLink}>
                  <span>Products</span>
                  <img src={arrow} alt="" className={styles.arrowIcon}></img>
                </Link>
                <div id={styles.dropdown}>
                  <Link to="/products">All</Link>
                  <Link to="/gifts">Gifts</Link>
                  <Link to="/jewelry">Jewelry</Link>
                </div>
              </div>
            </li>

            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/*Cart Icon starts here...*/}
        <div className={styles.cartContainer} onClick={toggleCartOpen}>
          <div className={styles.cart}>
            <img src={cartImage}></img>
            <span className={styles.qty}>{qty}</span>
          </div>
        </div>
        <div>
          {cartTransitions.map(({ item, key, props }) => {
            //Item takes place of isCartOpen boolean
            return item && <Cart key={key} style={props} qty={qty} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav
