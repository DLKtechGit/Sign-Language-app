import React, { createContext, useState, useContext, useEffect } from 'react';
import { authApi } from '../api/authApi';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on app start
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Check stored token/user data
      // const token = await AsyncStorage.getItem('authToken');
      // const userData = await AsyncStorage.getItem('userData');
      // if (token && userData) {
      //   setUser(JSON.parse(userData));
      //   setIsAuthenticated(true);
      // }
      setIsLoading(false);
    } catch (error) {
      console.error('Auth check error:', error);
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await authApi.login(email, password);
      if (response.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        // Store token
        // await AsyncStorage.setItem('authToken', response.data.token);
        // await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
        return { success: true };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await authApi.register(name, email, password);
      if (response.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        // Store token
        // await AsyncStorage.setItem('authToken', response.data.token);
        // await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
        return { success: true };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      setIsAuthenticated(false);
      // Clear stored data
      // await AsyncStorage.removeItem('authToken');
      // await AsyncStorage.removeItem('userData');
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
