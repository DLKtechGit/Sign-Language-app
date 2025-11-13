# Sign Language Learning & Prediction App

A modern, beautiful React Native Expo app for learning and practicing sign language with AI-powered gesture recognition.

## 📱 Features

- **Learn A–Z Signs**: Master the sign language alphabet with visual guides
- **Text to Sign**: Convert any text into sign language representations
- **Photo to Text**: Recognize sign language gestures from images
- **Camera Prediction**: Real-time AI-powered sign language recognition
- **Beautiful UI**: Modern design with smooth animations and gradients
- **Dark/Light Mode**: Automatic theme support
- **Responsive Design**: Works perfectly on all screen sizes

## 🎨 Design Highlights

- Vibrant gradient cards inspired by modern app design
- Smooth animations using React Native Reanimated
- Clean, minimal interface with generous spacing
- Rounded corners and soft shadows throughout
- Professional typography and color palette
- Optimized for both iOS and Android

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd SignLanguageApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on your device:**
   - Scan the QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## 📦 Project Structure

```
SignLanguageApp/
├── App.js                      # Main app entry point
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── babel.config.js             # Babel configuration
│
├── assets/                     # Static assets
│   ├── fonts/                  # Custom fonts
│   ├── icons/                  # App icons
│   ├── images/                 # Images
│   └── signs/                  # Sign language images
│
└── src/
    ├── api/                    # API integration
    │   ├── client.js           # Axios client
    │   ├── authApi.js          # Authentication API
    │   ├── textPredictApi.js   # Text prediction API
    │   ├── photoPredictApi.js  # Photo prediction API
    │   └── cameraPredictApi.js # Camera prediction API
    │
    ├── components/
    │   ├── ui/                 # Reusable UI components
    │   │   ├── ButtonPrimary.jsx
    │   │   ├── InputField.jsx
    │   │   ├── Card.jsx
    │   │   ├── Loader.jsx
    │   │   └── GradientBackground.jsx
    │   ├── layout/             # Layout components
    │   │   ├── Header.jsx
    │   │   └── ScreenWrapper.jsx
    │   └── predict/            # Prediction components
    │       ├── SignCard.jsx
    │       └── LetterCard.jsx
    │
    ├── navigation/             # Navigation setup
    │   ├── AppNavigator.jsx
    │   ├── AuthNavigator.jsx
    │   └── MainNavigator.jsx
    │
    ├── screens/                # App screens
    │   ├── Splash/
    │   │   └── SplashScreen.jsx
    │   ├── Auth/
    │   │   ├── LoginScreen.jsx
    │   │   └── RegisterScreen.jsx
    │   ├── Home/
    │   │   └── HomeScreen.jsx
    │   ├── Learn/
    │   │   ├── LearnScreen.jsx
    │   │   └── LetterDetailScreen.jsx
    │   └── Predict/
    │       ├── TextPredictScreen.jsx
    │       ├── ImagePredictScreen.jsx
    │       └── CameraPredictScreen.jsx
    │
    ├── context/                # React Context
    │   ├── AuthContext.jsx
    │   └── AppContext.jsx
    │
    ├── styles/                 # Design system
    │   ├── colors.js
    │   ├── typography.js
    │   ├── spacing.js
    │   └── shadows.js
    │
    ├── utils/                  # Utility functions
    │   ├── helpers.js
    │   ├── validators.js
    │   └── constants.js
    │
    └── config/                 # Configuration
        ├── env.js
        └── routes.js
```

## 🎨 Design System

### Color Palette

- **Primary Colors:**
  - Blue: `#5B9FFF`
  - Purple: `#A78BFA`
  - Pink: `#F472B6`
  - Green: `#34D399`
  - Yellow: `#FBBF24`

- **Gradients:**
  - Blue: `['#5B9FFF', '#3B82F6']`
  - Purple: `['#A78BFA', '#8B5CF6']`
  - Pink: `['#F472B6', '#EC4899']`
  - Green: `['#34D399', '#10B981']`

### Typography

- **Font Sizes:** 12px - 48px
- **Weights:** Regular (400), Medium (500), Semibold (600), Bold (700)
- **System Fonts:** iOS System / Android Roboto

### Spacing

- **Base Unit:** 4px
- **Scale:** 4, 8, 16, 24, 32, 40, 48, 64, 80px
- **Border Radius:** 4, 8, 12, 16, 20, 24, 28px

## 🔧 Configuration

### Backend API Integration

To connect your backend API:

1. Open `src/config/env.js`
2. Update `API_BASE_URL` with your backend URL
3. Uncomment actual API calls in API files
4. Remove mock implementations

### Camera & Image Picker

Permissions are configured in `app.json`:
- Camera permission for real-time prediction
- Photo library access for image uploads

## 📱 Screens Overview

### 1. Splash Screen
- Animated app logo and title
- Smooth wave animations
- Auto-navigation to Login

### 2. Login Screen
- Email and password inputs
- Gradient background with floating shapes
- Link to registration

### 3. Register Screen
- Name, email, and password fields
- Beautiful onboarding-style header
- Smooth fade-in animations

### 4. Home Screen
- Welcome message with user name
- 4 colorful feature cards:
  - Learn A–Z Signs
  - Text → Sign Photo
  - Photo → Text Converter
  - Camera Prediction
- Animated card entrance

### 5. Learn A–Z Signs
- Grid of 26 letter cards (A-Z)
- Color-coded gradient cards
- Tap to view detail

### 6. Letter Detail Screen
- Large sign language image
- Letter badge
- Practice tips
- Beautiful gradient card

### 7. Text Prediction
- Text input field
- Convert button
- Animated result cards showing sign sequence
- Grid layout for multiple signs

### 8. Image Prediction
- Image picker interface
- Upload preview
- Prediction result with confidence score
- Alternative predictions

### 9. Camera Prediction
- Full-screen camera view
- Animated scanning frame
- Real-time prediction display
- Confidence indicator
- Instructions overlay

## 🎭 Animations

All screens feature smooth animations:
- **Fade In/Out**: Screen transitions
- **Scale**: Button press feedback
- **Slide**: Card entrance animations
- **Spring**: Bouncy card interactions
- **Pulse**: Loading indicators

## 🔐 Authentication

Current implementation uses mock authentication. To integrate real authentication:

1. Update `src/api/authApi.js`
2. Implement token storage (AsyncStorage)
3. Add token refresh logic
4. Update API client interceptors

## 🚀 Deployment

### Build for Production

**iOS:**
```bash
expo build:ios
```

**Android:**
```bash
expo build:android
```

### Expo EAS Build

```bash
eas build --platform ios
eas build --platform android
```

## 📝 TODO / Future Enhancements

- [ ] Connect to real backend API
- [ ] Implement actual ML model for predictions
- [ ] Add video tutorials for each sign
- [ ] Progress tracking and achievements
- [ ] Social features (share progress)
- [ ] Multiple language support
- [ ] Voice-to-sign conversion
- [ ] Practice mode with feedback
- [ ] Offline mode support
- [ ] Cloud sync for progress

## 🐛 Troubleshooting

### Common Issues

**Issue: Metro bundler won't start**
```bash
expo start -c
```

**Issue: Dependencies not installing**
```bash
rm -rf node_modules
npm install
```

**Issue: iOS simulator not showing**
```bash
expo start --ios
```

**Issue: Camera not working**
- Check permissions in `app.json`
- Ensure device has camera access enabled

## 📄 License

This project is created by MiniMax Agent for educational purposes.

## 👨‍💻 Author

**MiniMax Agent**

---

**Made with ❤️ using React Native Expo**
