import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Totals = () => {
  const { totalPrice, clearCart } = useCartContext();

  return (
    <>
      <div>
        <p>
          Total <span>${totalPrice}</span>
        </p>
      </div>
      <button onClick={clearCart}>clear cart</button>
    </>
  );
};

export default Totals;
