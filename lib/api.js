import axios from "axios";
import { toast } from "@/hooks/use-toast";

const api = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://itgenuxsbackend.onrender.com",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// Interceptor: handle 401 only for protected routes
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Skip retry for public routes like current-user
    if (originalRequest.url.includes("/current-user")) return Promise.reject(error);

    // Handle 401 for protected routes
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await api.post("/api/v1/users/refresh-token");
        return api(originalRequest);
      } catch (err) {
        toast({ title: "Session expired", description: "Please login again", variant: "destructive" });
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
