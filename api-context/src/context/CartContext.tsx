import React, { ReactNode, useState } from "react";
import { Product } from "../types";

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  cartSize: number;
};

const CartContext = React.createContext({} as CartContextType);

interface Props {
  children: ReactNode | ReactNode[];
}

export function CartContextProvider({ children }: Props): React.ReactElement {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartSize: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
