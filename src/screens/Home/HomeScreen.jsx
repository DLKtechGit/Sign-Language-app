import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { HOME_CARDS } from '../../utils/constants';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';
import { shadows } from '../../styles/shadows';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const { theme } = useApp();

  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);

  useEffect(() => {
    headerOpacity.value = withSpring(1);
    headerTranslateY.value = withSpring(0);
  }, []);

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
    transform: [{ translateY: headerTranslateY.value }],
  }));

  const handleCardPress = (route) => {
    navigation.navigate(route);
  };

  const handleLogout = async () => {
    await logout();
    navigation.replace('Auth');
  };

  return (
    <ScreenWrapper>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* Header */}
        <Animated.View style={[styles.header, headerAnimatedStyle]}>
          <View>
            <Text style={[styles.greeting, { color: theme.colors.textSecondary }]}>
              Welcome back,
            </Text>
            <Text style={[styles.name, { color: theme.colors.text }]}>
              {user?.name || 'User'} 👋
            </Text>
          </View>
          
          <TouchableOpacity 
            onPress={handleLogout}
            style={[styles.logoutButton, { backgroundColor: theme.colors.surface }]}
          >
            <Feather name="log-out" size={20} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Ready to sign?
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Choose what you'd like to do today
          </Text>
        </View>

        {/* Feature Cards */}
        <View style={styles.cardsContainer}>
          {HOME_CARDS.map((card, index) => (
            <FeatureCard
              key={card.id}
              card={card}
              index={index}
              onPress={() => handleCardPress(card.route)}
            />
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

const FeatureCard = ({ card, index, onPress }) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withDelay(
      index * 100,
      withSpring(1, { damping: 12 })
    );
    opacity.value = withDelay(
      index * 100,
      withSpring(1)
    );
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.cardWrapper, animatedStyle]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.cardTouchable}
      >
        <LinearGradient
          colors={card.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <View style={styles.iconCircle}>
            <Feather name={card.icon} size={28} color="#FFFFFF" />
          </View>
          
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
          
          <View style={styles.arrowCircle}>
            <Feather name="arrow-right" size={20} color="#FFFFFF" />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.screenPaddingHorizontal,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  greeting: {
    fontSize: typography.sizes.sm,
    marginBottom: 4,
  },
  name: {
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.bold,
  },
  logoutButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.sm,
  },
  titleSection: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.sizes.base,
  },
  cardsContainer: {
    flex: 1,
  },
  cardWrapper: {
    marginBottom: spacing.lg,
  },
  cardTouchable: {
    borderRadius: spacing.radius['2xl'],
    overflow: 'hidden',
    ...shadows.lg,
  },
  card: {
    padding: spacing.xl,
    minHeight: 140,
    justifyContent: 'space-between',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: '#FFFFFF',
    marginBottom: spacing.xs,
  },
  cardDescription: {
    fontSize: typography.sizes.base,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: spacing.sm,
  },
  arrowCircle: {
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
