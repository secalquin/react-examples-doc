import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";

export const useProducts = () => {
  const useQueryProducts = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const dataFetched = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      return dataFetched.data;
    },
  });

  return {
    useQueryProducts,
  };
};
