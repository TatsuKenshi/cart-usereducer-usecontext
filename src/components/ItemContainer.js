import React from "react";
import SingleItem from "./SingleItem";
import { useCartContext } from "../hooks/useCartContext";

const ItemContainer = () => {
  const { cart } = useCartContext();

  return (
    <>
      <div>
        <h2>Your Cart</h2>
      </div>
      <div>
        {cart.map((item) => {
          return <SingleItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default ItemContainer;
