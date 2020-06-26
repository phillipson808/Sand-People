import React from "react"

const ProductFilter = (props) => {
  return (
    <div>
      <select name="vendors" id="vendors">
       {props.vendorArr ? props.vendorArr.map((vendor, i) => {
         return (
           <option value={vendor} key={i}>{vendor}</option>
         )
       }) : <div></div>}
      </select>
    </div>
  )
}

export default ProductFilter
