import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Header from '../../components/layout/Header';
import LetterCard from '../../components/predict/LetterCard';
import { useApp } from '../../context/AppContext';
import { ALPHABET } from '../../utils/constants';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';

const LearnScreen = ({ navigation }) => {
  const { theme } = useApp();

  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleLetterPress = (letter) => {
    navigation.navigate('LetterDetail', { letter });
  };

  return (
    <ScreenWrapper scrollable={false}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Header
          title="Learn A–Z Signs"
          subtitle="Master the alphabet"
          showBack
        />

        <Animated.View style={[styles.content, animatedStyle]}>
          <FlatList
            data={ALPHABET}
            renderItem={({ item, index }) => (
              <LetterCard
                letter={item}
                index={index}
                onPress={handleLetterPress}
              />
            )}
            keyExtractor={(item) => item}
            numColumns={4}
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>
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
  grid: {
    paddingBottom: spacing.xl,
  },
});

export default LearnScreen;
