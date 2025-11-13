import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Header from '../../components/layout/Header';
import ButtonPrimary from '../../components/ui/ButtonPrimary';
import Card from '../../components/ui/Card';
import Loader from '../../components/ui/Loader';
import { useApp } from '../../context/AppContext';
import { photoPredictApi } from '../../api/photoPredictApi';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';

const ImagePredictScreen = () => {
  const { theme } = useApp();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please allow access to your photo library');
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setResult(null); // Clear previous result
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const handlePredict = async () => {
    if (!image) {
      Alert.alert('Error', 'Please select an image first');
      return;
    }

    setLoading(true);
    try {
      const response = await photoPredictApi.predictImage(image);
      if (response.success) {
        setResult(response.data);
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to predict sign');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Header
          title="Photo to Text"
          subtitle="Recognize signs from images"
          showBack
        />

        <View style={styles.content}>
          {/* Image Preview */}
          <TouchableOpacity
            onPress={pickImage}
            style={[styles.imageContainer, { backgroundColor: theme.colors.surface }]}
            activeOpacity={0.8}
          >
            {image ? (
              <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
            ) : (
              <View style={styles.placeholder}>
                <View style={[styles.iconCircle, { backgroundColor: colors.primary.purple + '20' }]}>
                  <Feather name="image" size={40} color={colors.primary.purple} />
                </View>
                <Text style={[styles.placeholderText, { color: theme.colors.text }]}>
                  Tap to select image
                </Text>
                <Text style={[styles.placeholderHint, { color: theme.colors.textSecondary }]}>
                  Choose a photo of a sign language gesture
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            {image && (
              <TouchableOpacity
                onPress={pickImage}
                style={[styles.changeButton, { backgroundColor: theme.colors.surface }]}
              >
                <Feather name="refresh-cw" size={20} color={theme.colors.text} />
                <Text style={[styles.changeButtonText, { color: theme.colors.text }]}>
                  Change Image
                </Text>
              </TouchableOpacity>
            )}

            <ButtonPrimary
              title="Recognize Sign"
              onPress={handlePredict}
              loading={loading}
              gradient={colors.gradients.purple}
              disabled={!image}
            />
          </View>

          {/* Results */}
          {loading && (
            <View style={styles.loaderContainer}>
              <Loader size="large" />
              <Text style={[styles.loadingText, { color: theme.colors.textSecondary }]}>
                Analyzing sign...
              </Text>
            </View>
          )}

          {!loading && result && (
            <Card style={[styles.resultCard, { backgroundColor: theme.colors.card }]}>
              <Text style={[styles.resultLabel, { color: theme.colors.textSecondary }]}>
                Predicted Sign
              </Text>
              <Text style={[styles.resultLetter, { color: theme.colors.text }]}>
                {result.predictedLetter}
              </Text>
              <View style={styles.confidenceBar}>
                <View style={styles.confidenceLabel}>
                  <Text style={[styles.confidenceText, { color: theme.colors.textSecondary }]}>
                    Confidence
                  </Text>
                  <Text style={[styles.confidenceValue, { color: colors.primary.green }]}>
                    {(result.confidence * 100).toFixed(1)}%
                  </Text>
                </View>
                <View style={[styles.progressBar, { backgroundColor: theme.colors.surface }]}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${result.confidence * 100}%`,
                        backgroundColor: colors.primary.green,
                      },
                    ]}
                  />
                </View>
              </View>

              {result.alternativePredictions && result.alternativePredictions.length > 1 && (
                <View style={styles.alternatives}>
                  <Text style={[styles.alternativesTitle, { color: theme.colors.textSecondary }]}>
                    Alternative predictions
                  </Text>
                  {result.alternativePredictions.slice(1, 4).map((alt, index) => (
                    <View key={index} style={styles.alternativeItem}>
                      <Text style={[styles.alternativeLetter, { color: theme.colors.text }]}>
                        {alt.letter}
                      </Text>
                      <Text style={[styles.alternativeConfidence, { color: theme.colors.textSecondary }]}>
                        {(alt.confidence * 100).toFixed(1)}%
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </Card>
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
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: spacing.radius['2xl'],
    overflow: 'hidden',
    marginBottom: spacing.lg,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  placeholderText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.xs,
  },
  placeholderHint: {
    fontSize: typography.sizes.sm,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: spacing.lg,
  },
  changeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    borderRadius: spacing.radius.lg,
    marginBottom: spacing.md,
  },
  changeButtonText: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.medium,
    marginLeft: spacing.sm,
  },
  loaderContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  loadingText: {
    marginTop: spacing.md,
    fontSize: typography.sizes.base,
  },
  resultCard: {
    padding: spacing.xl,
  },
  resultLabel: {
    fontSize: typography.sizes.sm,
    marginBottom: spacing.xs,
  },
  resultLetter: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing.lg,
  },
  confidenceBar: {
    marginBottom: spacing.lg,
  },
  confidenceLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  confidenceText: {
    fontSize: typography.sizes.sm,
  },
  confidenceValue: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  alternatives: {
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  alternativesTitle: {
    fontSize: typography.sizes.sm,
    marginBottom: spacing.sm,
  },
  alternativeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  alternativeLetter: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
  },
  alternativeConfidence: {
    fontSize: typography.sizes.sm,
  },
});

export default ImagePredictScreen;
