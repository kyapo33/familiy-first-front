import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create a new Axios instance with your desired configuration
const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json', // Add default headers (optional)
    Authorization: localStorage.getItem('token') ?? undefined
  }
});

// Add request interceptor (optional)
axiosClient.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication headers
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
