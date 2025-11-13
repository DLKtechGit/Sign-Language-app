import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Header from '../../components/layout/Header';
import { useApp } from '../../context/AppContext';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';
import { shadows } from '../../styles/shadows';

const { width } = Dimensions.get('window');

const LetterDetailScreen = ({ route }) => {
  const { letter } = route.params;
  const { theme } = useApp();

  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withDelay(200, withSpring(1, { damping: 12 }));
    opacity.value = withDelay(200, withSpring(1));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  // Mock image URL - replace with actual sign language image
  const imageUrl = `https://www.signingsavvy.com/images/words/alphabet/${letter.toLowerCase()}.jpg`;

  return (
    <ScreenWrapper>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Header
          title={`Letter ${letter}`}
          subtitle="Practice this sign"
          showBack
        />

        <View style={styles.content}>
          <Animated.View style={[styles.cardWrapper, animatedStyle]}>
            <LinearGradient
              colors={colors.gradients.blue}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <View style={styles.letterBadge}>
                <Text style={styles.letterBadgeText}>{letter}</Text>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: imageUrl }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </LinearGradient>
          </Animated.View>

          <View style={styles.infoSection}>
            <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
              How to sign "{letter}"
            </Text>
            <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>
              Practice making this sign with your hand. Follow the image carefully and try to match the hand position and finger placement.
            </Text>
          </View>

          <View style={[styles.tipsCard, { backgroundColor: theme.colors.card }]}>
            <View style={styles.tipItem}>
              <View style={[styles.tipIcon, { backgroundColor: colors.primary.blue + '20' }]}>
                <Text style={styles.tipEmoji}>👁️</Text>
              </View>
              <View style={styles.tipContent}>
                <Text style={[styles.tipTitle, { color: theme.colors.text }]}>
                  Watch Carefully
                </Text>
                <Text style={[styles.tipDescription, { color: theme.colors.textSecondary }]}>
                  Pay attention to finger positions
                </Text>
              </View>
            </View>

            <View style={styles.tipItem}>
              <View style={[styles.tipIcon, { backgroundColor: colors.primary.green + '20' }]}>
                <Text style={styles.tipEmoji}>✋</Text>
              </View>
              <View style={styles.tipContent}>
                <Text style={[styles.tipTitle, { color: theme.colors.text }]}>
                  Practice Daily
                </Text>
                <Text style={[styles.tipDescription, { color: theme.colors.textSecondary }]}>
                  Repeat until it feels natural
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.screenPaddingHorizontal,
  },
  cardWrapper: {
    marginBottom: spacing.xl,
  },
  card: {
    borderRadius: spacing.radius['2xl'],
    padding: spacing.xl,
    minHeight: width - 40,
    ...shadows.xl,
  },
  letterBadge: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterBadgeText: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 120,
    height: width - 120,
    borderRadius: spacing.radius.xl,
  },
  infoSection: {
    marginBottom: spacing.xl,
  },
  infoTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: typography.sizes.base,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.base,
  },
  tipsCard: {
    borderRadius: spacing.radius.xl,
    padding: spacing.lg,
    ...shadows.card,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  tipIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  tipEmoji: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    marginBottom: 2,
  },
  tipDescription: {
    fontSize: typography.sizes.sm,
  },
});

export default LetterDetailScreen;
