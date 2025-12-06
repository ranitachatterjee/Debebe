import axios from "axios";

// Create Axios instance with base URL from .env
const API = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      typeof window !== "undefined" && localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : "",
  },
});

// Debug: Check base URL during development
console.log("API BaseURL:", import.meta.env.VITE_PUBLIC_API_BASE_URL);

// ------------- GET REQUEST FOR React Query -------------------
// export const getRequest = async (url) => {
//   const response = await API.get(url);
//   return response.data;
// };

// ------------- POST REQUEST FOR React Query ------------------
export const postRequest = async ({ url, body }) => {
  const response = await API.post(url, body);
  return response.data;
};

// ------------- PUT REQUEST FOR React Query -------------------
// export const putRequest = async ({ url, body }) => {
//   const response = await API.put(url, body);
//   return response.data;
// };

// ------------- DELETE REQUEST FOR React Query ----------------
// export const deleteRequest = async (url) => {
//   const response = await API.delete(url);
//   return response.data;
//};

// Export the instance if needed anywhere
export default API;
