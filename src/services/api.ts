import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';

// API Configuration
// Backend runs on port 8000, not 3001
const API_URL = import.meta.env.VITE_API_URL || 'https://agent.adlex.azamat.ai/api';
// Increased timeout for AI response latency
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10);

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // No authentication token needed - backend uses session-based approach
    // Session ID is sent in request body for chat endpoints
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle global errors
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.error('Not found: The requested resource was not found');
          break;
        case 422:
          console.error('Validation error:', error.response.data);
          break;
        case 500:
          console.error('Server error: Please try again later');
          break;
        case 503:
          console.error('Service unavailable: Database error');
          break;
        default:
          console.error(`Error ${error.response.status}:`, error.response.data);
      }
    } else if (error.request) {
      console.error('Network error: No response received from server');
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Generic API request helper
export async function apiRequest<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response = await api.request<T>(config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default api;
