export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
};

export type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};
