import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useCartContext } from "../hooks/useCartContext";

const SingleItem = (item) => {
  const { id, title, price, img, amount } = item;

  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  return (
    <>
      <div className="flex">
        <div>
          <img src={img} alt={title} className="h-[100px]" />
        </div>
        <div>
          <p>{title}</p>
          <p>${price}</p>
          <button onClick={() => removeItem(id)}>remove item</button>
        </div>
        <div className="ml-4">
          <div>
            <button onClick={() => increaseAmount(id)}>
              <ChevronUpIcon className="h-[16px] w-[16px]" />
            </button>
          </div>
          <p>{amount}</p>
          <button onClick={() => decreaseAmount(id)}>
            <ChevronDownIcon className="h-[16px] w-[16px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
