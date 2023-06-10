import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("user") ?? "{}")?.token;

  if (token) {
    config.headers["Authorization"] = token ? `Bearer ${token}` : undefined;
  }

  return config;
});
