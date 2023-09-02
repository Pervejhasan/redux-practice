const { createStore, combineReducers } = require("redux");

// Product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";


// Cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// product
// state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
};

// Cart
// state
const initialCartState = {
    cart: ["sugar"],
    numberOfProduct: 1,
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

// carts action
const getCart = () => {
    return {
      type: GET_CART_ITEMS,
    };
  };
  
  const addCart = (product) => {
    return {
      type: ADD_CART_ITEM,
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

// Cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case GET_CART_ITEMS:
        return {
          ...state,
        };
      case ADD_CART_ITEM:
        return {
          cart: [...state.cart, action.payload],
          numberOfProduct:state.numberOfProduct + 1,
        };
      default:
        return state;
    }
  };

//combine reducer
const rootReducer=combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// combine reducer store
const store=createStore(rootReducer);
 store.subscribe(()=>{
     console.log(store.getState())
 })

 store.dispatch(getProducts())
 store.dispatch(addProduct("pan"))
 store.dispatch(getCart())
 store.dispatch(addCart("pen"))




/*product store
 const store=createStore(productReducer);
 store.subscribe(()=>{
     console.log(store.getState())
 })
 store.dispatch(addProduct("milk"))
/*

/*cart store
const store=createStore(cartReducer);
 store.subscribe(()=>{
     console.log(store.getState())
 })
 store.dispatch( addCart('pen'))
*/