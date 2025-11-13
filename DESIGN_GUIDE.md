# UI Design Guide
## Sign Language Learning & Prediction App

This document provides detailed UI specifications for all screens, ensuring consistent and beautiful design throughout the app.

---

## 🎨 Design Philosophy

The app follows a **modern, minimal, and vibrant** design language inspired by contemporary mobile app design. Key principles:

- **Colorful & Energetic**: Vibrant gradients that inspire learning
- **Clean & Spacious**: Generous padding and white space
- **Smooth & Fluid**: Animations that feel natural
- **Accessible**: High contrast and readable typography
- **Responsive**: Adapts to all screen sizes

---

## 📐 Design System

### Color Palette

#### Primary Colors
```javascript
Blue:    #5B9FFF  // Learning, Trust
Purple:  #A78BFA  // Creativity, Magic
Pink:    #F472B6  // Energy, Passion
Green:   #34D399  // Success, Growth
Yellow:  #FBBF24  // Attention, Warmth
Indigo:  #6366F1  // Primary brand color
```

#### Gradient Combinations
```javascript
blue:     ['#5B9FFF', '#3B82F6']  // Cool, Calm
purple:   ['#A78BFA', '#8B5CF6']  // Mystical
pink:     ['#F472B6', '#EC4899']  // Vibrant
green:    ['#34D399', '#10B981']  // Fresh
yellow:   ['#FBBF24', '#F59E0B']  // Warm
sunset:   ['#F472B6', '#FBBF24']  // Dynamic
ocean:    ['#5B9FFF', '#34D399']  // Serene
twilight: ['#A78BFA', '#F472B6']  // Dreamy
```

#### Theme Colors

**Light Mode:**
```javascript
Background:      #FFFFFF
Surface:         #F9FAFB
Card:            #FFFFFF
Text:            #1F2937
Text Secondary:  #6B7280
Border:          #E5E7EB
Shadow:          rgba(0, 0, 0, 0.1)
```

**Dark Mode:**
```javascript
Background:      #111827
Surface:         #1F2937
Card:            #374151
Text:            #F9FAFB
Text Secondary:  #9CA3AF
Border:          #4B5563
Shadow:          rgba(0, 0, 0, 0.3)
```

### Typography

#### Font Sizes
```javascript
xs:   12px  // Captions, small labels
sm:   14px  // Secondary text
base: 16px  // Body text
lg:   18px  // Emphasis
xl:   20px  // Subheadings
2xl:  24px  // Headings
3xl:  30px  // Large headings
4xl:  36px  // Hero headings
5xl:  48px  // Display text
```

#### Font Weights
```javascript
Regular:    400  // Body text
Medium:     500  // Slightly emphasized
Semibold:   600  // Buttons, labels
Bold:       700  // Headings
Extrabold:  800  // Hero text
```

### Spacing Scale
```javascript
xs:   4px   // Tight spacing
sm:   8px   // Small gaps
md:   16px  // Standard spacing
lg:   24px  // Large gaps
xl:   32px  // Extra large
2xl:  40px  // Section spacing
3xl:  48px  // Major sections
4xl:  64px  // Large sections
5xl:  80px  // Maximum spacing
```

### Border Radius
```javascript
none: 0px
xs:   4px   // Subtle rounding
sm:   8px   // Small elements
md:   12px  // Standard
lg:   16px  // Buttons, inputs
xl:   20px  // Large cards
2xl:  24px  // Feature cards
3xl:  28px  // Hero elements
full: 9999px // Circles
```

### Shadows
```javascript
sm: elevation 2  // Subtle depth
md: elevation 4  // Standard cards
lg: elevation 8  // Elevated elements
xl: elevation 12 // Floating elements
```

---

## 📱 Screen Specifications

### 1. Splash Screen

**Layout:**
- Full-screen gradient background (twilight gradient)
- Centered content with animated waves
- Logo in circular container

**Elements:**
```
┌─────────────────────┐
│                     │
│   ╭───────────╮     │
│   │    👋     │     │  Icon (80px)
│   ╰───────────╯     │
│                     │
│  Sign Language      │  Title (36px Bold)
│  Learning &         │  Subtitle (18px Medium)
│  Prediction App     │
│                     │
│  ┌───────────────┐  │  Tagline badge
│  │ Master sign   │  │  (16px, rounded)
│  │ language...   │  │
│  └───────────────┘  │
│                     │
└─────────────────────┘
```

**Animations:**
- 3 concentric waves pulsing outward
- Logo scales from 0 to 1 with spring
- Text fades in
- Auto-navigate after 3 seconds

---

### 2. Login Screen

**Layout:**
- Gradient background (ocean gradient)
- White card with rounded corners
- Floating shapes animation

**Elements:**
```
┌─────────────────────┐
│                     │
│   ╭───────────╮     │
│   │    👋     │     │  Icon circle (100px)
│   ╰───────────╯     │
│                     │
│  Welcome Back!      │  Title (30px Bold)
│  Sign in to         │  Subtitle (16px)
│  continue...        │
│                     │
│  ┌───────────────┐  │
│  │ Email         │  │  Input field (56px)
│  │ ✉ email@...   │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │ Password      │  │  Input field (56px)
│  │ 🔒 ••••••••   │  │
│  └───────────────┘  │
│                     │
│  Forgot Password?   │  Link (14px)
│                     │
│  ┌───────────────┐  │
│  │    LOGIN      │  │  Button (56px)
│  └───────────────┘  │
│                     │
│  Don't have an      │  Footer text
│  account? Sign Up   │
│                     │
└─────────────────────┘
```

**Animations:**
- Form slides up from bottom
- Inputs highlight on focus
- Button scales on press

---

### 3. Register Screen

**Layout:**
- Similar to login with twilight gradient
- Additional name field
- Registration-focused copy

**Color Scheme:**
- Primary button: Pink gradient
- Background: Twilight gradient

---

### 4. Home Screen

**Layout:**
- Header with greeting
- Feature cards in vertical list
- Each card is full width

**Elements:**
```
┌─────────────────────┐
│ Welcome back,   [⚙]│  Header
│ John 👋             │
│                     │
│ Ready to sign?      │  Title (30px Bold)
│ Choose what you'd   │  Subtitle (16px)
│ like to do today    │
│                     │
│ ┌───────────────┐   │
│ │ 📖 CARD       │   │  Feature card 1
│ │ Learn A-Z     │   │  (140px height)
│ │ Master the... │   │
│ │            →  │   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ ✍️ CARD       │   │  Feature card 2
│ │ Text → Sign   │   │
│ │ Convert...    │   │
│ │            →  │   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ 🖼 CARD        │   │  Feature card 3
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ 📷 CARD        │   │  Feature card 4
│ └───────────────┘   │
│                     │
└─────────────────────┘
```

**Card Specifications:**
- Padding: 32px
- Border Radius: 24px
- Min Height: 140px
- Gradient background
- Icon in circle (56px)
- Title: 20px Bold
- Description: 16px Regular
- Arrow icon bottom-right

**Animations:**
- Cards animate in sequence (100ms delay each)
- Scale from 0 to 1 with spring
- Press scales to 0.97

**Gradients by Card:**
1. Learn A-Z: Blue gradient
2. Text → Sign: Green gradient
3. Photo → Text: Purple gradient
4. Camera: Pink gradient

---

### 5. Learn A-Z Screen

**Layout:**
- Header with back button
- Grid of 26 letter cards (4 columns)

**Elements:**
```
┌─────────────────────┐
│ ← Learn A-Z Signs   │  Header
│   Master alphabet   │
│                     │
│ [A] [B] [C] [D]     │  Letter grid
│ [E] [F] [G] [H]     │  4 per row
│ [I] [J] [K] [L]     │  Card size:
│ [M] [N] [O] [P]     │  70px × 70px
│ [Q] [R] [S] [T]     │
│ [U] [V] [W] [X]     │
│ [Y] [Z]             │
│                     │
└─────────────────────┘
```

**Letter Card Specs:**
- Size: (width - 40 - 12) / 4
- Gradient: Rotates through 6 gradients
- Letter: 30px Bold, white
- Border Radius: 16px
- Margin: 4px

**Animations:**
- Grid items fade in
- Scale on press (0.9)
- Spring back to 1

---

### 6. Letter Detail Screen

**Layout:**
- Header with back button
- Large image card
- Information section
- Tips section

**Elements:**
```
┌─────────────────────┐
│ ← Letter A          │  Header
│   Practice this...  │
│                     │
│ ┌───────────────┐   │
│ │               │   │  Large image card
│ │               │   │  (width - 40)
│ │   [IMAGE]     │   │  Blue gradient bg
│ │               │   │
│ │            [A]│   │  Letter badge
│ └───────────────┘   │
│                     │
│ How to sign "A"     │  Info title
│ Practice making...  │  Description
│                     │
│ ┌───────────────┐   │
│ │ 👁️ Watch       │   │  Tips card
│ │   Carefully    │   │
│ │                │   │
│ │ ✋ Practice     │   │
│ │   Daily        │   │
│ └───────────────┘   │
│                     │
└─────────────────────┘
```

**Animations:**
- Image card scales in
- Fade in from 0 opacity
- Spring animation (damping: 12)

---

### 7. Text Prediction Screen

**Layout:**
- Header with back button
- Text input area
- Convert button
- Results grid

**Elements:**
```
┌─────────────────────┐
│ ← Text to Sign      │  Header
│   Convert text...   │
│                     │
│ ┌───────────────┐   │
│ │ Enter Text    │   │  Input (multiline)
│ │ Type a word.. │   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ CONVERT TO    │   │  Button (green)
│ │ SIGNS         │   │
│ └───────────────┘   │
│                     │
│ Sign Language       │  Results header
│ Sequence            │
│ 5 signs             │
│                     │
│ [H] [E]             │  Sign cards grid
│ [L] [L]             │  2 per row
│ [O]                 │
│                     │
└─────────────────────┘
```

**Sign Card Specs:**
- Width: (width - 40 - 16) / 2
- Height: width * 1.2
- Image/placeholder inside
- Letter badge top-right
- Gradient background

---

### 8. Image Prediction Screen

**Layout:**
- Header with back button
- Large image picker area
- Action buttons
- Results card

**Elements:**
```
┌─────────────────────┐
│ ← Photo to Text     │  Header
│   Recognize signs   │
│                     │
│ ┌───────────────┐   │
│ │               │   │  Image container
│ │  📷 Tap to    │   │  (square)
│ │  select image │   │
│ │               │   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ 🔄 Change Img │   │  Change button
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ RECOGNIZE     │   │  Action button
│ │ SIGN          │   │  (purple gradient)
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ Predicted     │   │  Result card
│ │ Sign: H       │   │  (large letter)
│ │               │   │
│ │ Confidence    │   │  Progress bar
│ │ ████████ 95%  │   │
│ └───────────────┘   │
│                     │
└─────────────────────┘
```

---

### 9. Camera Prediction Screen

**Layout:**
- Full-screen camera view
- Floating header
- Scanning frame
- Prediction overlay
- Instructions

**Elements:**
```
┌─────────────────────┐
│ [X] Camera Predict  │  Floating header
│                     │  (transparent bg)
│                     │
│       ┌─────┐       │  Scanning frame
│       │     │       │  (280×280)
│       │     │       │  Animated corners
│       └─────┘       │
│ Position your hand  │  Hint text
│                     │
│                     │
│ ┌───────────────┐   │
│ │ Detected Sign │   │  Prediction card
│ │      H        │   │  (dark overlay)
│ │   🟢 95%      │   │  (gradient bg)
│ └───────────────┘   │
│                     │
│ • Keep hand steady  │  Instructions
│ • Ensure good light │  (white text)
│ • Make clear gest. │
│                     │
└─────────────────────┘
```

**Prediction Card Specs:**
- Dark gradient background
- Letter: 48px Bold
- Confidence indicator
- Rounded corners: 24px
- Bottom padding: 32px

**Animations:**
- Scanning frame corners pulse
- Prediction updates smoothly
- Confidence bar animates

---

## 🎭 Animation Guidelines

### Timing
```javascript
Fast:   200ms  // Quick interactions
Normal: 300ms  // Standard animations
Slow:   500ms  // Emphasis animations
```

### Easing
- **Spring**: Natural, bouncy (buttons, cards)
- **Timing**: Smooth, controlled (fades, slides)
- **Sequence**: Multi-step animations

### Common Animations

**Card Entrance:**
```javascript
scale: 0 → 1 (spring, damping: 12)
opacity: 0 → 1
delay: index * 100ms
```

**Button Press:**
```javascript
scale: 1 → 0.97 (spring)
```

**Fade In:**
```javascript
opacity: 0 → 1 (300ms timing)
```

**Slide Up:**
```javascript
translateY: 50 → 0 (spring)
opacity: 0 → 1
```

---

## 📐 Layout Guidelines

### Screen Padding
```javascript
Horizontal: 20px (all screens)
Vertical:   16px (content)
Top:        40-48px (headers)
Bottom:     32px (safe area)
```

### Component Spacing
```javascript
Between sections:  32px
Between cards:     16px
Between elements:  8-16px
Button padding:    16px vertical
Input height:      56px
```

### Grid Layouts
```javascript
2-column: gap 16px
4-column: gap 8px
Responsive breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
```

---

## ♿ Accessibility

### Contrast Ratios
- Text on light: 7:1 minimum
- Text on dark: 7:1 minimum
- Interactive elements: 3:1 minimum

### Touch Targets
- Minimum size: 44×44px
- Spacing between: 8px minimum

### Typography
- Base size: 16px (readable)
- Line height: 1.5× (comfortable)
- Font weight: 400+ (legible)

---

## 📱 Responsive Behavior

### Small Screens (<375px)
- Reduce padding to 16px
- Scale down font sizes by 10%
- 2-column max for grids

### Large Screens (>768px)
- Max content width: 600px
- Center content
- Increase padding to 32px

### Tablets
- 3-column grids where applicable
- Larger touch targets
- Enhanced spacing

---

## 🎨 Icon System

**Primary Icon Set:** Feather Icons

**Icon Sizes:**
```javascript
xs: 16px  // Small indicators
sm: 20px  // Input fields
md: 24px  // Navigation, actions
lg: 32px  // Feature cards
xl: 40px  // Empty states
```

**Icon Colors:**
- On gradients: White (#FFFFFF)
- On light: Text color (#1F2937)
- On dark: White (#F9FAFB)
- Accent: Primary blue (#5B9FFF)

---

## 🏁 Implementation Checklist

- [✓] All screens designed
- [✓] Component library created
- [✓] Animation system implemented
- [✓] Responsive layouts
- [✓] Dark mode support
- [✓] Accessibility features
- [✓] Error states
- [✓] Loading states
- [✓] Empty states

---

**Design Guide Version:** 1.0  
**Last Updated:** 2025-11-13  
**Created by:** MiniMax Agent
