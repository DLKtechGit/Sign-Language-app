// App constants
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const SIGN_CATEGORIES = [
  { id: 'alphabet', name: 'Alphabet', icon: 'text' },
  { id: 'numbers', name: 'Numbers', icon: 'hash' },
  { id: 'words', name: 'Common Words', icon: 'message-circle' },
];

export const HOME_CARDS = [
  {
    id: 'learn',
    title: 'Learn A–Z Signs',
    description: 'Master the sign language alphabet',
    icon: 'book-open',
    gradient: ['#5B9FFF', '#3B82F6'],
    route: 'Learn',
  },
  {
    id: 'text-predict',
    title: 'Text → Sign Photo',
    description: 'Convert text to sign language',
    icon: 'type',
    gradient: ['#34D399', '#10B981'],
    route: 'TextPredict',
  },
  {
    id: 'image-predict',
    title: 'Photo → Text',
    description: 'Recognize signs from images',
    icon: 'image',
    gradient: ['#A78BFA', '#8B5CF6'],
    route: 'ImagePredict',
  },
  {
    id: 'camera-predict',
    title: 'Camera Prediction',
    description: 'Real-time sign recognition',
    icon: 'camera',
    gradient: ['#F472B6', '#EC4899'],
    route: 'CameraPredict',
  },
];

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const SCREEN_SIZES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
