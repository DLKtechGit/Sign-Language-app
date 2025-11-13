import apiClient from './client';
import { config } from '../config/env';

export const textPredictApi = {
  // Convert text to sign language
  predictText: async (text) => {
    try {
      // Mock API call for demo - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (!text || text.trim() === '') {
        throw new Error('Please enter text to convert');
      }

      // Convert text to array of letters
      const letters = text.toUpperCase().split('').filter(char => /[A-Z]/.test(char));

      // Mock response with sign image URLs for each letter
      const signs = letters.map(letter => ({
        letter,
        imageUrl: `https://www.signingsavvy.com/images/words/alphabet/${letter.toLowerCase()}.jpg`,
        // For demo purposes - replace with actual API response
      }));

      return {
        success: true,
        data: {
          text: text.toUpperCase(),
          signs,
        },
      };

      // Actual API call (uncomment when backend is ready)
      // const response = await apiClient.post(config.endpoints.predict.text, {
      //   text,
      // });
      // return response;
    } catch (error) {
      throw error;
    }
  },
};
