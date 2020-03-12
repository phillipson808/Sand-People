import React from "react"
import { Helmet } from "react-helmet"
import ShopifyScript from "../../public/static/ShopifyScript.js"


const Head = () => {
  return (
    <Helmet>
      <title>Sand People</title>
      <script src={ShopifyScript}></script>
    </Helmet>
  )
}

export default Head