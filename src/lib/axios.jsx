import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL, // 💥 read from .env
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // changed to true as backend uses cookies
});

export default axiosInstance;
