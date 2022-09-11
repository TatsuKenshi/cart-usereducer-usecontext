import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { data } from "../data/data";
import reducer from "./reducer";

// fetch url
const fetchUrl = "https://course-api.com/react-useReducer-cart-project";

// crete context
export const CartContext = createContext();

// initial state
const initialState = {
  isLoading: false,
  cart: data,
  totalPrice: 0,
  numberOfItems: 0,
};

// action variables
const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE_AMOUNT = "INCREASE_AMOUNT";
const DECREASE_AMOUNT = "DECREASE_AMOUNT";
const GET_TOTALS = "GET_TOTALS";
const LOADING = "LOADING";
const DISPLAY_ITEMS = "DISPLAY_ITEMS";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
  };

  // useMemo
  // const myValue = {
  //   clearCart: clearCart,
  //   removeItem: removeItem,
  //   increaseAmount: increaseAmount,
  //   decreaseAmount: decreaseAmount,
  // };
  // const value = useMemo(
  //   () => myValue,
  //   [myValue, clearCart, removeItem, increaseAmount, decreaseAmount]
  // );

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
