const { createStore,applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

// Product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product
// state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
};


// products action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};


// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProduct:state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};


// combine reducer store
const store=createStore(productReducer,applyMiddleware(logger));
 store.subscribe(()=>{
     console.log(store.getState())
 })

 store.dispatch(getProducts())
 store.dispatch(addProduct("pan"))




