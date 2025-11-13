// Environment configuration
export const config = {
  // API Base URL - Update this with your backend URL
  API_BASE_URL: __DEV__ 
    ? 'http://localhost:3000/api' 
    : 'https://your-production-api.com/api',
  
  // API Endpoints
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
    },
    predict: {
      text: '/predict/text',
      image: '/predict/image',
      camera: '/predict/camera',
    },
    signs: {
      getAll: '/signs',
      getLetter: '/signs/:letter',
    },
  },

  // API Timeout
  API_TIMEOUT: 30000,

  // App Configuration
  app: {
    name: 'Sign Language Learning & Prediction App',
    version: '1.0.0',
  },
};
