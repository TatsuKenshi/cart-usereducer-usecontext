import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useCartContext } from "../hooks/useCartContext";

const SingleItem = (item) => {
  const { id, title, price, img, amount } = item;

  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  return (
    <>
      <div className="flex mt-2">
        <div>
          <img src={img} alt={title} className="h-[80px]" />
        </div>
        <div className="w-max mr-auto">
          <p>{title}</p>
          <p>${price}</p>
          <button
            onClick={() => removeItem(id)}
            className="border px-1 bg-red-800 rounded-lg text-white hover:bg-white hover:text-red-800"
          >
            remove item
          </button>
        </div>
        <div className="text-center">
          <div>
            <button onClick={() => increaseAmount(id)}>
              <ChevronUpIcon className="w-[16px] text-red-800" />
            </button>
          </div>
          <p>{amount}</p>
          <button onClick={() => decreaseAmount(id)}>
            <ChevronDownIcon className="w-[16px] text-red-800" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
