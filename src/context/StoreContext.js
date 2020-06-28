import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"
//Shopify test card #: 4242424242424242
const client = Client.buildClient({
  domain: "sandpeople.myshopify.com",
  storefrontAccessToken: "36a908b298bc3054a3b965f3030af92e",
})

const defaultValues = {
  isCartOpen: false,
  isCartEmpty: true,
  showDisplay: false,
  isAvailable: true,
  cart: [],
  addProductToCart: () => {},
  client: client,
  checkout: {
    lineItems: [],
  },
  qty: 1,
  imageSrc: "",
  variantId: "",
  price: '',
  productList: [],
  vendorList: [],
  productCollection: []
}

export const StoreContext = createContext(defaultValues)
//Check if it's a browser
const isBrowser = typeof window !== "undefined"

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isCartEmpty, setCartEmpty] = useState(true)
  const [showDisplay, setShowDisplay] = useState(false)
  const [qty, setAddQty] = useState()
  const [imageSrc, setImageSrc] = useState("")
  const [variantId, setVariantId] = useState("")
  const [price, setPrice] = useState('')
  const [isAvailable, setIsAvailable] = useState(true)
  let [productList, setProductlist] = useState(defaultValues.productList);
  let [productCollection, setProductCollection] = useState(defaultValues.productCollection)

  //setCheckout is like the setState function in React Hooks.

  const toggleCartOpen = () => {
    setCartOpen(!isCartOpen)
  }

  useEffect(() => {
    initializeCheckout()
  }, []) //If you leave second argument as blank array it acts like componentdidmount

  //Get new checkout (useful for after a customer completes payment for an order to reset cart.)
  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const updateProductList =  async (productArr, vendor, collection) => {
    try {
      if(vendor === 'All') {
        setProductlist(collection)
      }
      else if(vendor) {
        let filteredArr = collection.filter((item) => item.vendor === vendor);
        setProductlist(filteredArr)
      } else {
        setProductlist(productArr)
      }
 
    } catch(e) {
      console.log(e);
    }
  }

  //See if cart is empty. Fill this in later.
  const checkIfCartEmpty = async checkout => {
    try {
      if (checkout.lineItems.length !== 0) {
        setCartEmpty(false)
      } else {
        setCartEmpty(true)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const toggleDisplay = async () => {
    try {
      console.log("fired")
      setShowDisplay(!showDisplay)
    } catch (e) {
      console.error(e)
    }
  }


  const initializeCheckout = async () => {
    try {
      //Check if ID exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      //If there isn't a checkout in local storage, set it to null so we can make a new one.
      let newCheckout = null

      //If ID exists, fetch checkout
      if (currentCheckoutId) {
        newCheckout = await client.checkout.fetch(currentCheckoutId)
        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        newCheckout = await getNewId()
      }
      setCheckout(newCheckout)
    } catch (e) {}
  }

  const addProductToCart = async (variantId, quantity) => {
    try {
      const lineItems = [
        {
          variantId: variantId,
          quantity: quantity,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      
      setCheckout(newCheckout)

    } catch (e) {
      console.error(e)
    }
  }
  const deleteProductFromCart = async variantId => {
    try {
      const lineItemsToRemove = [variantId]
      const newCheckout = await client.checkout.removeLineItems(
        checkout.id,
        lineItemsToRemove
      )
      setCheckout(newCheckout)
    } catch (e) {
      console.log(e)
    }
  }

  const removeQuantityFromCart = async (variantId, quantity) => {
    try {
      const lineItemsToUpdate = [{ id: variantId, quantity: quantity }]
      const newCheckout = await client.checkout.updateLineItems(
        checkout.id,
        lineItemsToUpdate
      )
      setCheckout(newCheckout)
    } catch (e) {
      console.log(e)
    }
  }

  const addtoQty = async productQty => {
    try {
      setAddQty(productQty + qty)
    } catch (e) {
      console.log(e)
    }
  }

 


  

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        checkout,
        addProductToCart,
        deleteProductFromCart,
        removeQuantityFromCart,
        productCollection,
        setProductCollection,
        toggleCartOpen,
        isCartOpen,
        checkIfCartEmpty,
        toggleDisplay,
        showDisplay,
        addtoQty,
        setImageSrc,
        setVariantId,
        setIsAvailable,
        updateProductList,
        productList,
        initializeCheckout
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
