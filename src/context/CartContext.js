import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { data } from "../data/data";
import reducer from "./reducer";

// fetch url
const fetchUrl = "https://course-api.netlify.api/api/react-course-cart-project";

// crete context
export const CartContext = createContext();

// initial state
const initialState = {
  isLoading: false,
  cart: data,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // cart and item functions
  const removeItem = (id, title) => {
    console.log(title, "item removed");
  };

  const increaseAmount = (id, title) => {
    console.log(title, "amount increased");
  };

  const decreaseAmount = (id, title) => {
    console.log(title, "amount decreased");
  };

  const clearCart = () => {
    console.log("cart has been cleared");
  };

  // useMemo
  const myValue = {};
  const value = useMemo(() => myValue, [myValue]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        removeItem,
        increaseAmount,
        decreaseAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
