import React, { createContext, useReducer, useEffect, useRef } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  GET_TOTALS,
  LOADING,
  DISPLAY_ITEMS,
} from "../actions";

// fetch url
const fetchUrl = "https://course-api.com/react-useReducer-cart-project";

// create context
export const CartContext = createContext();

// initial state
const initialState = {
  isLoading: false,
  cart: [],
  totalPrice: 0,
  numberOfItems: 0,
};

const CartProvider = ({ children }) => {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetching ref
  // prevents second useEffect trigger on component mount
  const fetchRef = useRef(false);

  // cart and item functions
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
  };

  const decreaseAmount = (id, title) => {
    dispatch({ type: DECREASE_AMOUNT, payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });

    const response = await fetch(fetchUrl);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: cart });
    // add try and catch and an action for failed fetch which will set cart to the data array and set loading to false
  };

  useEffect(() => {
    if (!fetchRef.current) {
      fetchRef.current = true;
      fetchData();
    }
  });

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
