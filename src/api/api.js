import axios from 'axios';

// Create a configured axios instance
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000, // 10 second timeout
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const productsData = async () => {
  try {
    const response = await apiClient.get('/products', {
      params: {
        limit: 12
      }
    });
    
    // Return only the data payload
    return response.data;
    
  } catch (error) {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with non-2xx status
      console.error('API Error Status:', error.response.status);
      console.error('API Error Data:', error.response.data);
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
      throw new Error('Network error - please check your connection');
    } else {
      // Something else happened
      console.error('Unexpected Error:', error.message);
      throw new Error('Failed to fetch products');
    }
  }
};

// Optional: Add response interceptor for global error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    // You can add additional error processing here
    return Promise.reject(error);
  }
);