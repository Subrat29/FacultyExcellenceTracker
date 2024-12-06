import axios from 'axios';
import { API_TIMEOUT, API_URL } from '../constant';
import toast from 'react-hot-toast';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT, // Optional timeout for requests (in milliseconds)
});

// Add a request interceptor to include the Authorization header if the token is available
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage or wherever it's stored (e.g., Redux, cookies)
    const token = localStorage.getItem('accessToken'); // Adjust according to your token storage

    // If token exists, set it in the Authorization header

    if (!token) {
      // Optionally handle the case where there's no token, such as redirecting to login
      console.error('No token found, redirecting to login...');
      // Redirect to login page
    } else {
      // If token exists, add it to the request header
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, add a response interceptor to handle errors globally (e.g., for 401 Unauthorized)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized (401) errors, e.g., log out the user or redirect to login
      console.error('Unauthorized access. Please log in again.');
      // Example: Redirect to login page
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
