import React from 'react';
import { Link } from 'gatsby';
import Cart from './Cart'

const Nav = () => {
  return (
    <div>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Cart /></li>
      </ul>
    </div>
  )
}

export default Nav;