import axios, { AxiosError } from "axios";
import { useQueryApiErrorType } from "../types/useQueryApiType";

const fakeStoreAPI = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

fakeStoreAPI.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 404) {
      return Promise.reject({
        message: "Error to get Products",
      } as useQueryApiErrorType);
    }

    return Promise.reject(error);
  }
);

export default fakeStoreAPI;
