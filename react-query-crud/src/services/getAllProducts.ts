import fakeStoreAPI from "../api/fakeStoreAPI";

export const getAllProducts = async () => {
  const result = await fakeStoreAPI.get("/products");
  return result;
};
