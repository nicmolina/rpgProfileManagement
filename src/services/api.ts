import axios from "axios";
import { getToken, logout } from "./auth";

const api = axios.create({
  baseURL: "localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (request) => {
  const token = getToken();

  if (request.url !== "./token" && token)
    request.headers.Authorzation = `Bearer ${token}`;

  request.url += "/";

  return request;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) logout();

    return Promise.reject(error);
  }
);

export default api;
