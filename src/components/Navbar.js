import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Navbar = () => {
  const { amount } = useCartContext();
  console.log(amount);
  return <div>Navbar {amount}</div>;
};

export default Navbar;
