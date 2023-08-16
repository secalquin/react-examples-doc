type Rate = {
  rate: number;
  count: number;
};

export type Product = {
  readonly id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rate: Rate;
  stock: number;
};

export type CartItem = {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
};
