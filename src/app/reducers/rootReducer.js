import ShopifyBuy from 'shopify-buy'

const client = ShopifyBuy.buildClient({
  domain: "sandpeople.myshopify.com",
  storefrontAccessToken: "36a908b298bc3054a3b965f3030af92e",
})

const initialState = {
  cart: [],
  client: client,
  addProductToCart: () => {
    console.log('added');
  }
}

const rootReducer = (state=initialState, action) => {
  const GET_PRODUCTS = 'GET_PRODUCTS'


  switch(action.type) {
    case GET_PRODUCTS:
      state = {
        ...state,
        cart: action.payload
      }
      break;
      default:
        return state;
  }

  return state
}

export default rootReducer;
