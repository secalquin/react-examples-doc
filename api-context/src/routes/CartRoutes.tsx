import React from "react";
import { CartContextProvider } from "../context/CartContext";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const CartRoutes = ({ children }: Props) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartRoutes;
