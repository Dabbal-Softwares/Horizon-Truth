// api/index.ts
import axios from 'axios';
import { useAuthStore } from './store/auth.store';
import { GuestSessionManager } from './config/guest-session';


const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      const guestHeaders = GuestSessionManager.getAuthHeaders();
      Object.assign(config.headers, guestHeaders);
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only logout if it's a registered user
      const { isAuthenticated } = useAuthStore.getState();
      if (isAuthenticated) {
        useAuthStore.getState().logout();
      }
      
      // For guests, we might want to create a new session
      if (!GuestSessionManager.getSessionId()) {
        GuestSessionManager.createSession();
      }
    }
    return Promise.reject(error);
  }
);

export default api;