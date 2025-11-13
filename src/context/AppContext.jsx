import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { colors } from '../styles/colors';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme || 'light');

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const theme = {
    colors: colorScheme === 'light' ? colors.light : colors.dark,
    primary: colors.primary,
    gradients: colors.gradients,
    isDark: colorScheme === 'dark',
  };

  const value = {
    theme,
    colorScheme,
    toggleColorScheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
