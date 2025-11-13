# 🚀 Quick Start Guide
## Sign Language Learning & Prediction App

Get up and running in 5 minutes!

---

## ⚡ Prerequisites

Before you begin, make sure you have:

- ✅ **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- ✅ **npm** or **yarn** - Comes with Node.js
- ✅ **Expo CLI** (optional but recommended)

---

## 📦 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd SignLanguageApp
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

**⏱️ This will take 2-3 minutes...**

---

## 🎯 Running the App

### Option 1: Expo Go (Recommended for Testing)

1. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

2. **Scan the QR code:**
   - **iOS**: Open Camera app and scan the QR code
   - **Android**: Open Expo Go app and scan the QR code

3. **Download Expo Go:**
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Option 2: iOS Simulator (Mac Only)

```bash
npm start
# Press 'i' to open iOS Simulator
```

### Option 3: Android Emulator

```bash
npm start
# Press 'a' to open Android Emulator
```

### Option 4: Web Browser

```bash
npm start
# Press 'w' to open in web browser
```

---

## 📱 First Time Setup

### Test Login Credentials

The app uses **mock authentication** for demo purposes.

You can login with ANY email and password, for example:
- **Email**: `demo@example.com`
- **Password**: `password123`

Or create a new account - both will work!

---

## 🎨 App Features to Try

Once logged in, explore these features:

### 1. **Learn A–Z Signs** 📖
   - Tap the blue "Learn A–Z Signs" card
   - Browse the alphabet grid
   - Tap any letter to see the sign in detail

### 2. **Text to Sign** ✍️
   - Tap the green "Text → Sign Photo" card
   - Type any word (e.g., "HELLO")
   - Tap "Convert to Signs"
   - See the sign language sequence

### 3. **Photo Recognition** 🖼️
   - Tap the purple "Photo → Text" card
   - Select an image from your library
   - Tap "Recognize Sign"
   - View the prediction result

### 4. **Camera Prediction** 📷
   - Tap the pink "Camera Prediction" card
   - Allow camera permission
   - Position your hand in the frame
   - See real-time predictions

---

## 🔧 Troubleshooting

### Issue: "Cannot find module"

**Solution:**
```bash
rm -rf node_modules
npm install
```

### Issue: Metro bundler won't start

**Solution:**
```bash
npm start -- --reset-cache
```

or

```bash
expo start -c
```

### Issue: Expo Go won't connect

**Solutions:**
1. Make sure your phone and computer are on the same WiFi network
2. Try restarting the Expo server
3. Use tunnel mode: `npm start -- --tunnel`

### Issue: iOS Simulator not found

**Solution:**
Make sure Xcode is installed:
```bash
xcode-select --install
```

### Issue: Android Emulator not starting

**Solution:**
1. Open Android Studio
2. Go to AVD Manager
3. Create/Start a virtual device
4. Try again: `npm start`, then press `a`

### Issue: Camera not working

**Solution:**
1. Physical devices only (simulators don't have cameras)
2. Check app permissions in device settings
3. Ensure `expo-camera` is installed

---

## 🎯 Quick Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm start -- --clear` | Clear cache and start |
| `npm start -- --tunnel` | Use tunnel for remote testing |
| `expo start --ios` | Direct start on iOS |
| `expo start --android` | Direct start on Android |
| `expo start --web` | Start web version |

---

## 📁 Project Structure Overview

```
SignLanguageApp/
├── App.js              ← Main entry point
├── src/
│   ├── screens/        ← All app screens
│   ├── components/     ← Reusable components
│   ├── navigation/     ← Navigation setup
│   ├── api/           ← API integration
│   ├── styles/        ← Design system
│   └── utils/         ← Helper functions
└── assets/            ← Images, fonts, etc.
```

---

## 🎨 Customization

### Change Colors

Edit `src/styles/colors.js`:
```javascript
primary: {
  blue: '#YOUR_COLOR',
  // ... more colors
}
```

### Change App Name

Edit `app.json`:
```json
{
  "expo": {
    "name": "Your App Name"
  }
}
```

### Connect Real Backend

Edit `src/config/env.js`:
```javascript
API_BASE_URL: 'https://your-api.com'
```

---

## 📚 Next Steps

1. ✅ **Explore the app** - Try all features
2. 📖 **Read README.md** - Detailed documentation
3. 🎨 **Read DESIGN_GUIDE.md** - UI/UX specifications
4. 🔧 **Customize** - Make it your own
5. 🚀 **Deploy** - Build for production

---

## 🆘 Need Help?

- **Documentation**: Check README.md
- **Design System**: See DESIGN_GUIDE.md
- **Expo Docs**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev

---

## ✨ Tips for Development

1. **Hot Reload**: Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)
2. **Debug Menu**: Press `Cmd+D` (iOS) / `Cmd+M` (Android)
3. **Reload**: Press `R` twice in terminal
4. **Clear Cache**: Press `Shift+C` in terminal

---

## 🎉 You're Ready!

Your Sign Language Learning & Prediction App is now running!

Enjoy exploring and happy coding! 🚀

---

**Created by:** MiniMax Agent  
**Version:** 1.0.0  
**Last Updated:** 2025-11-13
