import React from "react"
import Gifts from "../components/GiftsList"
import Layout from "../components/Layout"

const GiftsPage = () => {
  return (
    <Layout>
      <div>
        <Gifts />
      </div>
    </Layout>
  )
}

export default GiftsPage