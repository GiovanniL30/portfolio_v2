import axios from "axios";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || "";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  timeout: 120000,
  withCredentials: false,
  headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
});

githubApi.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const backendMessage = error.response?.data?.error?.message || error.response?.data?.message || error.message;

      return Promise.reject(new Error(backendMessage));
    }

    return Promise.reject(error);
  },
);
export default githubApi;
