import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
  timeout: 120000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const backendMessage = error.response?.data?.error?.message || error.response?.data?.message || error.message;

      return Promise.reject(new Error(backendMessage));
    }

    return Promise.reject(error);
  },
);
export default api;
