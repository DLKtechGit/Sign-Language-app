import apiClient from './client';
import { config } from '../config/env';

export const authApi = {
  // Login
  login: async (email, password) => {
    try {
      // Mock API call for demo - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      // Mock successful login
      return {
        success: true,
        data: {
          user: {
            id: '1',
            name: 'Demo User',
            email: email,
          },
          token: 'mock-jwt-token-12345',
        },
      };

      // Actual API call (uncomment when backend is ready)
      // const response = await apiClient.post(config.endpoints.auth.login, {
      //   email,
      //   password,
      // });
      // return response;
    } catch (error) {
      throw error;
    }
  },

  // Register
  register: async (name, email, password) => {
    try {
      // Mock API call for demo - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate validation
      if (!name || !email || !password) {
        throw new Error('All fields are required');
      }

      // Mock successful registration
      return {
        success: true,
        data: {
          user: {
            id: '1',
            name: name,
            email: email,
          },
          token: 'mock-jwt-token-12345',
        },
      };

      // Actual API call (uncomment when backend is ready)
      // const response = await apiClient.post(config.endpoints.auth.register, {
      //   name,
      //   email,
      //   password,
      // });
      // return response;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: async () => {
    try {
      // Mock API call for demo
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true };

      // Actual API call (uncomment when backend is ready)
      // const response = await apiClient.post(config.endpoints.auth.logout);
      // return response;
    } catch (error) {
      throw error;
    }
  },
};
