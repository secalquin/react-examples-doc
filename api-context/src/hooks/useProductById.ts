import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";

export const useProductById = (id?: number) => {
  const useQueryProductById = useQuery(["products", id], async () => {
    const dataFetched = await axios.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
    return dataFetched.data;
  });

  return {
    useQueryProductById,
  };
};
