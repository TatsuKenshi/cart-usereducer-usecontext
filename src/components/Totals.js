import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Totals = () => {
  const { totalPrice, clearCart } = useCartContext();

  return (
    <>
      <div className="w-11/12 md:w-8/12 mx-auto my-8 max-w-[1100px]">
        <div className="">
          <p className="float-right">
            Total <span>${totalPrice}</span>
          </p>
        </div>
        <div>
          <button
            onClick={clearCart}
            className="border px-1 bg-red-800 rounded-lg text-white hover:bg-white hover:text-red-800 mb-1"
          >
            clear cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Totals;
