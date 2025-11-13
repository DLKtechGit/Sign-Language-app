import apiClient from './client';
import { config } from '../config/env';

export const cameraPredictApi = {
  // Predict sign language from camera frame
  predictCamera: async (imageUri) => {
    try {
      // Mock API call for demo - replace with actual API
      // For real-time prediction, this should be optimized
      await new Promise(resolve => setTimeout(resolve, 500));

      if (!imageUri) {
        throw new Error('No camera frame provided');
      }

      // Mock prediction result
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];

      return {
        success: true,
        data: {
          predictedLetter: randomLetter,
          confidence: Math.random() * 0.3 + 0.7, // 0.7 to 1.0
          timestamp: Date.now(),
        },
      };

      // Actual API call (uncomment when backend is ready)
      // const formData = new FormData();
      // formData.append('frame', {
      //   uri: imageUri,
      //   type: 'image/jpeg',
      //   name: 'frame.jpg',
      // });
      //
      // const response = await apiClient.post(
      //   config.endpoints.predict.camera,
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

  // Batch prediction for smoother real-time experience
  predictCameraBatch: async (frames) => {
    try {
      // Process multiple frames at once for better performance
      const predictions = await Promise.all(
        frames.map(frame => cameraPredictApi.predictCamera(frame))
      );
      return predictions;
    } catch (error) {
      throw error;
    }
  },
};
