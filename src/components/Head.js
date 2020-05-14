import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../img/favicon.ico'


const Head = () => {
  return (
    <Helmet>
      <title>Sand People</title>
      <link rel="icon" href={favicon} />

    </Helmet>
  )
}

export default Head