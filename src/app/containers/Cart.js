import React, { Component } from "react"
import { connect } from "react-redux"
import { getProducts } from "../actions/productActions"

const Cart = (props) => {
  console.log('state', props)
  return <div></div>
}


export default connect(state => ({
  test: state
}), null)(Cart)