

const initialState = {
  products: []
}

const rootReducer = (state=initialState, action) => {
  const GET_PRODUCTS = 'GET_PRODUCTS'


  switch(action.type) {
    case GET_PRODUCTS:
      state = {
        ...state,
        products: action.payload
      }
      break;
      default:
        return state;
  }

  return state
}

export default rootReducer;
