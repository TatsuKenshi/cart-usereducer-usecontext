import React from "react";
import { useCartContext } from "../hooks/useCartContext";

const Navbar = () => {
  const { numberOfItems } = useCartContext();

  return <div>Navbar {numberOfItems}</div>;
};

export default Navbar;
