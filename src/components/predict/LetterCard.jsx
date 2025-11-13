import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';
import { shadows } from '../../styles/shadows';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');
const cardSize = (width - spacing.screenPadding * 2 - spacing.md * 3) / 4;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const LetterCard = ({ letter, onPress, index = 0 }) => {
  const scale = useSharedValue(1);

  // Assign gradient based on index
  const gradients = [
    colors.gradients.blue,
    colors.gradients.green,
    colors.gradients.purple,
    colors.gradients.pink,
    colors.gradients.yellow,
    colors.gradients.ocean,
  ];
  
  const gradient = gradients[index % gradients.length];

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.9);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedTouchable
      onPress={() => onPress(letter)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
      style={[styles.container, animatedStyle]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.letter}>{letter}</Text>
      </LinearGradient>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardSize,
    height: cardSize,
    margin: spacing.xs,
    borderRadius: spacing.radius.lg,
    overflow: 'hidden',
    ...shadows.card,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    color: '#FFFFFF',
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
  },
});

export default LetterCard;
