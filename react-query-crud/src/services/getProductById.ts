import fakeStoreAPI from "../api/fakeStoreAPI";

export const getProductById = async (id: number) => {
  const result = await fakeStoreAPI.get(`/products/${id}`);
  return result;
};
