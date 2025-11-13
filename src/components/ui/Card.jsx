import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useApp } from '../../context/AppContext';
import { spacing } from '../../styles/spacing';
import { shadows } from '../../styles/shadows';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Card = ({ 
  children, 
  onPress, 
  gradient,
  style,
  animated = true,
  ...props 
}) => {
  const { theme } = useApp();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (animated) {
      scale.value = withSpring(0.97);
    }
  };

  const handlePressOut = () => {
    if (animated) {
      scale.value = withSpring(1);
    }
  };

  if (gradient) {
    return (
      <AnimatedTouchable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        style={[styles.container, animatedStyle, style]}
        {...props}
      >
        <LinearGradient
          colors={gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {children}
        </LinearGradient>
      </AnimatedTouchable>
    );
  }

  if (onPress) {
    return (
      <AnimatedTouchable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        style={[
          styles.container,
          { backgroundColor: theme.colors.card },
          animatedStyle,
          style,
        ]}
        {...props}
      >
        {children}
      </AnimatedTouchable>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.card },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.radius.xl,
    padding: spacing.cardPadding,
    ...shadows.card,
  },
  gradient: {
    borderRadius: spacing.radius.xl,
    padding: spacing.cardPadding,
  },
});

export default Card;
