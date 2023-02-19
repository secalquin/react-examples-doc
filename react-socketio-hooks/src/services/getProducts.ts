import api from "../config/axios";
import { Product } from "../types/ProductType";

export const getAllProducts = async () => {
  const response = await api.get<Product[]>("/products");
  return response;
};
