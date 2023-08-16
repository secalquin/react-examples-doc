import React, { ReactNode, useState } from "react";
import { CartItem, Product } from "../types";
import Swal from "sweetalert2";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  cartSize: number;
};

const CartContext = React.createContext({} as CartContextType);

interface Props {
  children: ReactNode | ReactNode[];
}

export function CartContextProvider({ children }: Props): React.ReactElement {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Product) => {
    // add item to cart and increment quantity if it already exists
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                price: cartItem.price + item.price,
              }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1,
          img: item.image,
        },
      ]);
    }

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id.toString()));

    Swal.fire({
      icon: "success",
      title: "Producto eliminado del carrito",
      showConfirmButton: false,
      timer: 1500,
    });
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
