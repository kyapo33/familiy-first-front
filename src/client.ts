import { Preferences } from '@capacitor/preferences';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE // Replace with your API base URL
});

// Function to get the authentication token from Preferences
const getToken = async (): Promise<string | undefined> => {
  try {
    const result = await Preferences.get({ key: 'token' });
    return result.value as string; // Assuming Preferences.get() returns an object with a 'value' property
  } catch (error) {
    console.error('Error getting token:', error);
    throw error; // You might want to handle errors appropriately here
  }
};

// Function to make a request with optional content type
const makeRequest = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  data?: any,
  contentType = 'application/json'
): Promise<AxiosResponse<T>> => {
  const token = await getToken();

  const headers: Record<string, string | undefined> = {
    Authorization: token ? `Bearer ${token}` : undefined,
    'Content-Type': contentType
  };

  return axiosInstance.request<T>({
    method,
    url,
    data,
    headers
  });
};

// Add response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default makeRequest;
