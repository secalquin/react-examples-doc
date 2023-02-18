import axios from "axios";

const placeHolderIntanceAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

placeHolderIntanceAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default placeHolderIntanceAPI;
