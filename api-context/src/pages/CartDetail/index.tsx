import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartDetail = (): React.ReactElement => {
  const { cart } = useContext(CartContext);

  return <div>{JSON.stringify(cart)}</div>;
};

export default CartDetail;
