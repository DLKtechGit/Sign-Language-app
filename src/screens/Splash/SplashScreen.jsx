import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const wave1 = useSharedValue(0);
  const wave2 = useSharedValue(0);
  const wave3 = useSharedValue(0);

  useEffect(() => {
    // Animate logo
    scale.value = withSpring(1, { damping: 10 });
    opacity.value = withTiming(1, { duration: 800 });

    // Animate waves
    wave1.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2000 }),
        withTiming(0, { duration: 2000 })
      ),
      -1,
      true
    );

    wave2.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2500 }),
        withTiming(0, { duration: 2500 })
      ),
      -1,
      true
    );

    wave3.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 3000 }),
        withTiming(0, { duration: 3000 })
      ),
      -1,
      true
    );

    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const wave1Style = useAnimatedStyle(() => ({
    opacity: wave1.value * 0.3,
    transform: [{ scale: 1 + wave1.value * 0.2 }],
  }));

  const wave2Style = useAnimatedStyle(() => ({
    opacity: wave2.value * 0.2,
    transform: [{ scale: 1 + wave2.value * 0.3 }],
  }));

  const wave3Style = useAnimatedStyle(() => ({
    opacity: wave3.value * 0.1,
    transform: [{ scale: 1 + wave3.value * 0.4 }],
  }));

  return (
    <LinearGradient
      colors={colors.gradients.twilight}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Animated waves */}
      <Animated.View style={[styles.wave, wave1Style]} />
      <Animated.View style={[styles.wave, wave2Style]} />
      <Animated.View style={[styles.wave, wave3Style]} />

      {/* Logo and title */}
      <Animated.View style={[styles.content, logoAnimatedStyle]}>
        <View style={styles.iconContainer}>
          <Feather name="move" size={80} color="#FFFFFF" />
        </View>
        
        <Text style={styles.title}>Sign Language</Text>
        <Text style={styles.subtitle}>Learning & Prediction App</Text>
        
        <View style={styles.tagline}>
          <Text style={styles.taglineText}>Master sign language with AI</Text>
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: width * 0.75,
    backgroundColor: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
    zIndex: 10,
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  tagline: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: spacing.radius.full,
  },
  taglineText: {
    fontSize: typography.sizes.base,
    color: '#FFFFFF',
    fontWeight: typography.weights.medium,
  },
});

export default SplashScreen;
