import axios, { AxiosError, AxiosResponse } from "axios";
import { getErrorFormatByErrorNumber } from "../utils/errorFormat";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const statusCode = error.response?.status || 500;
  return Promise.reject(getErrorFormatByErrorNumber(statusCode));
}

api.interceptors.response.use(onResponse, onResponseError);

export default api;
