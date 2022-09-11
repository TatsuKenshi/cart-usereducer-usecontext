import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Totals = () => {
  const { total, clearCart } = useCartContext();

  return (
    <>
      <div>
        <p>
          Total <span>${total}</span>
        </p>
      </div>
      <button onClick={clearCart}>clear cart</button>
    </>
  );
};

export default Totals;
