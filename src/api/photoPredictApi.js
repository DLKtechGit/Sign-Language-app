import apiClient from './client';
import { config } from '../config/env';

export const photoPredictApi = {
  // Predict sign language from image
  predictImage: async (imageUri) => {
    try {
      // Mock API call for demo - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (!imageUri) {
        throw new Error('Please select an image');
      }

      // Mock prediction result
      const mockLetters = ['H', 'E', 'L', 'L', 'O'];
      const randomLetter = mockLetters[Math.floor(Math.random() * mockLetters.length)];

      return {
        success: true,
        data: {
          predictedLetter: randomLetter,
          confidence: 0.95,
          alternativePredictions: [
            { letter: randomLetter, confidence: 0.95 },
            { letter: 'A', confidence: 0.03 },
            { letter: 'B', confidence: 0.02 },
          ],
        },
      };

      // Actual API call (uncomment when backend is ready)
      // const formData = new FormData();
      // formData.append('image', {
      //   uri: imageUri,
      //   type: 'image/jpeg',
      //   name: 'sign.jpg',
      // });
      //
      // const response = await apiClient.post(
      //   config.endpoints.predict.image,
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   }
      // );
      // return response;
    } catch (error) {
      throw error;
    }
  },
};
