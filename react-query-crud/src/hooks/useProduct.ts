import { UseQueryResult, useQuery } from "react-query";
import { getAllProducts } from "../services/getAllProducts";
import { useQueryApiErrorType } from "../types/useQueryApiType";

interface IUseProduct {
  useProductQuery: UseQueryResult<any, useQueryApiErrorType>;
  getAllProducts: any;
}

const useProduct = (): IUseProduct => {
  const useProductQuery = useQuery<any, useQueryApiErrorType>(
    "getAllProducts",
    getAllProducts
  );

  return { useProductQuery, getAllProducts: useProductQuery.data };
};

export default useProduct;
