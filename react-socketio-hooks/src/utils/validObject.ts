import { Product } from "../types/ProductType";

export const isProduct = (object: unknown): object is Product[] => {
  if (object !== null && typeof object === "object") {
    console.log("id" in object);

    return "id" in object && "title" in object && "price" in object;
  }

  return false;
};
