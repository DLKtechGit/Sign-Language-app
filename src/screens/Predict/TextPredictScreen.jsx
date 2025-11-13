import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Header from '../../components/layout/Header';
import InputField from '../../components/ui/InputField';
import ButtonPrimary from '../../components/ui/ButtonPrimary';
import SignCard from '../../components/predict/SignCard';
import Loader from '../../components/ui/Loader';
import { useApp } from '../../context/AppContext';
import { textPredictApi } from '../../api/textPredictApi';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';

const TextPredictScreen = () => {
  const { theme } = useApp();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleConvert = async () => {
    if (!text.trim()) {
      Alert.alert('Error', 'Please enter some text');
      return;
    }

    setLoading(true);
    try {
      const response = await textPredictApi.predictText(text);
      if (response.success) {
        setResults(response.data);
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to convert text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Header
          title="Text to Sign"
          subtitle="Convert text to sign language"
          showBack
        />

        <View style={styles.content}>
          <View style={styles.inputSection}>
            <InputField
              label="Enter Text"
              placeholder="Type a word or phrase..."
              value={text}
              onChangeText={setText}
              leftIcon="type"
              multiline
              style={styles.input}
            />

            <ButtonPrimary
              title="Convert to Signs"
              onPress={handleConvert}
              loading={loading}
              gradient={colors.gradients.green}
            />
          </View>

          {loading && (
            <View style={styles.loaderContainer}>
              <Loader size="large" />
              <Text style={[styles.loadingText, { color: theme.colors.textSecondary }]}>
                Converting to sign language...
              </Text>
            </View>
          )}

          {!loading && results && (
            <View style={styles.resultsSection}>
              <Text style={[styles.resultsTitle, { color: theme.colors.text }]}>
                Sign Language Sequence
              </Text>
              <Text style={[styles.resultsSubtitle, { color: theme.colors.textSecondary }]}>
                {results.signs.length} sign{results.signs.length !== 1 ? 's' : ''}
              </Text>

              <FlatList
                data={results.signs}
                renderItem={({ item, index }) => (
                  <SignCard
                    letter={item.letter}
                    imageUrl={item.imageUrl}
                    index={index}
                  />
                )}
                keyExtractor={(item, index) => `${item.letter}-${index}`}
                numColumns={2}
                contentContainerStyle={styles.grid}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}

          {!loading && !results && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>✍️</Text>
              <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>
                Ready to Convert
              </Text>
              <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
                Enter text above and tap "Convert to Signs" to see the sign language representation
              </Text>
            </View>
          )}
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
  inputSection: {
    marginBottom: spacing.xl,
  },
  input: {
    marginBottom: spacing.md,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: spacing.md,
    fontSize: typography.sizes.base,
  },
  resultsSection: {
    flex: 1,
  },
  resultsTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.xs,
  },
  resultsSubtitle: {
    fontSize: typography.sizes.sm,
    marginBottom: spacing.lg,
  },
  grid: {
    paddingBottom: spacing.xl,
  },
  row: {
    justifyContent: 'space-between',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  emptyEmoji: {
    fontSize: 60,
    marginBottom: spacing.lg,
  },
  emptyTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: typography.sizes.base,
    textAlign: 'center',
    lineHeight: typography.lineHeights.relaxed * typography.sizes.base,
  },
});

export default TextPredictScreen;
