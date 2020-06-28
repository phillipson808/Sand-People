import React, { useContext, useState } from "react"
import { StoreContext } from "../context/StoreContext"

const ProductFilter = props => {
  const [productList, setProductList] = useState()
  const [productCollection, setProductCollection] = useState()
  const { updateProductList } = useContext(StoreContext);

  const submit = ((e) => {
    setProductCollection(props.productCollection)
    setProductList(props.productCollection)
    updateProductList(props.productList, e.target.value, props.productCollection)
  })

  return (
    <div>
      <select name="vendors" id="vendors" onChange={submit}>
        {props.vendorArr ? (
          props.vendorArr.map((vendor, i) => {
            return (
              <option value={vendor} key={i}>
                {vendor}
              </option>
            )
          })
        ) : (
          <div></div>
        )}
      </select>
      <button></button>
    </div>
  )
}

export default ProductFilter
