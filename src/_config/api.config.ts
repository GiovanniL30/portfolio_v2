import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
  timeout: 120000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  const hrisToken = localStorage.getItem("hris-token");
  const examineToken = localStorage.getItem("examineeAccessToken");
  const tsksuiteApiKey = import.meta.env.VITE_TSEKSUITE_API_KEY;

  if (tsksuiteApiKey) {
    config.headers["x-api-key"] = tsksuiteApiKey;
  }

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (hrisToken) {
    config.headers["x-hris-token"] = hrisToken;
  }

  if (examineToken) {
    config.headers["x-examine-token"] = examineToken;
  }

  return config;
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
