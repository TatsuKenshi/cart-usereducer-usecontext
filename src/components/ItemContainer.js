import React from "react";
import SingleItem from "./SingleItem";
import { useCartContext } from "../hooks/useCartContext";

const ItemContainer = () => {
  const { cart } = useCartContext();

  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-8 max-w-[1100px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-800">Your Cart</h2>
      </div>
      <div className="mt-2">
        {cart.map((item) => {
          return <SingleItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ItemContainer;
