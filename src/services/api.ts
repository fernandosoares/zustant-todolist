import axios from "axios";
import { useTodoStore } from "../store";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    useTodoStore.setState({ loading: true });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    useTodoStore.setState({ loading: false });
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
