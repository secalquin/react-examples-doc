import { useQuery, UseQueryResult } from "react-query";
import { getProductById } from "../services/getProductById";
import { useQueryApiErrorType } from "../types/useQueryApiType";

interface IUseProduct {
  useProductByIdQuery: UseQueryResult<any, useQueryApiErrorType>;
}

export const useProductById = (productId: number): IUseProduct => {
  const useProductByIdQuery = useQuery<any, useQueryApiErrorType>(
    ["getProductById", productId],
    () => getProductById(productId)
  );

  return { useProductByIdQuery };
};
