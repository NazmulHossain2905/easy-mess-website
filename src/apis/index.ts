import axios from "axios";
import { BASE_URL } from "config/http";

const useCustomAxios = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor to set authorization token
useCustomAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

useCustomAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized error
      console.log("Unauthorized");
    } else {
      // Handle other errors
      console.log("Other errors");
    }
    return Promise.reject(error);
  }
);

export default useCustomAxios;
