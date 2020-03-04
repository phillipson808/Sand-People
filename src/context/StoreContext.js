import React, { createContext, useState } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "sandpeople.myshopify.com",
  storefrontAccessToken: "36a908b298bc3054a3b965f3030af92e",
})

const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {},
  client: client,
}

export const StoreContext = createContext(defaultValues)



export const StoreProvider = ({ children }) => {


  const addProductToCart = async (variantId) => {
    try{
      const newCheckout = await client.checkout.create();
      const lineItems = [{
        variantId: variantId,
        quantity: 1
      }]
      const addItems = await client.checkout.addLineItems(
        newCheckout.id,
        lineItems
      )
      console.log(addItems)
      console.log(addItems.webUrl)

    } catch(e) {
      console.error(e);
    }
  }


  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addProductToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
