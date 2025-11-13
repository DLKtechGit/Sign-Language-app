import { Platform } from 'react-native';

export const typography = {
  // Font families
  fonts: {
    regular: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
    medium: Platform.select({
      ios: 'System',
      android: 'Roboto-Medium',
      default: 'System',
    }),
    bold: Platform.select({
      ios: 'System',
      android: 'Roboto-Bold',
      default: 'System',
    }),
  },

  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },

  // Font weights
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Text styles
  styles: {
    h1: {
      fontSize: 48,
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 36,
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 30,
      fontWeight: '600',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 1.3,
    },
    h5: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 1.4,
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 1.5,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 1.5,
    },
    button: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 1.5,
    },
  },
};
