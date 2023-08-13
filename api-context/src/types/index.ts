type Rate = {
  rate: number;
  count: number;
};

export type Product = {
  readonly id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rate: Rate;
};
