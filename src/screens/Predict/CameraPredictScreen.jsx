import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useApp } from '../../context/AppContext';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { typography } from '../../styles/typography';

const CameraPredictScreen = ({ navigation }) => {
  const { theme } = useApp();
  const [permission, requestPermission] = useCameraPermissions();
  const [isActive, setIsActive] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const cameraRef = useRef(null);

  const borderOpacity = useSharedValue(0.5);

  useEffect(() => {
    // Animate scanning border
    borderOpacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0.5, { duration: 1000 })
      ),
      -1,
      true
    );
  }, []);

  const borderAnimatedStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
  }));

  useEffect(() => {
    if (permission?.granted) {
      setIsActive(true);
    }
  }, [permission]);

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.permissionContainer}>
          <View style={[styles.iconCircle, { backgroundColor: colors.primary.pink + '20' }]}>
            <Feather name="camera-off" size={40} color={colors.primary.pink} />
          </View>
          <Text style={[styles.permissionTitle, { color: theme.colors.text }]}>
            Camera Permission Required
          </Text>
          <Text style={[styles.permissionText, { color: theme.colors.textSecondary }]}>
            We need access to your camera to predict sign language gestures in real-time
          </Text>
          <TouchableOpacity
            onPress={requestPermission}
            style={styles.permissionButton}
          >
            <LinearGradient
              colors={colors.gradients.pink}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.permissionGradient}
            >
              <Text style={styles.permissionButtonText}>Grant Permission</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleStartPrediction = () => {
    // Simulate prediction - replace with actual ML model
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const confidence = Math.random() * 0.3 + 0.7; // 0.7 to 1.0

    setPrediction({
      letter: randomLetter,
      confidence: confidence,
      timestamp: Date.now(),
    });

    // Update prediction every 2 seconds
    setTimeout(handleStartPrediction, 2000);
  };

  useEffect(() => {
    if (isActive) {
      handleStartPrediction();
    }
  }, [isActive]);

  return (
    <View style={styles.container}>
      {/* Camera View */}
      <CameraView
        style={styles.camera}
        facing="front"
        ref={cameraRef}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="x" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Camera Prediction</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Scanning Frame */}
        <View style={styles.scanFrame}>
          <Animated.View style={[styles.scanBorder, borderAnimatedStyle]}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </Animated.View>
          <Text style={styles.scanText}>Position your hand in the frame</Text>
        </View>

        {/* Prediction Result */}
        <View style={styles.predictionContainer}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.9)']}
            style={styles.predictionCard}
          >
            {prediction ? (
              <>
                <Text style={styles.predictionLabel}>Detected Sign</Text>
                <Text style={styles.predictionLetter}>{prediction.letter}</Text>
                <View style={styles.confidenceContainer}>
                  <View style={styles.confidenceDot} />
                  <Text style={styles.confidenceText}>
                    {(prediction.confidence * 100).toFixed(0)}% confident
                  </Text>
                </View>
              </>
            ) : (
              <>
                <Feather name="hand" size={40} color="#FFFFFF" style={styles.handIcon} />
                <Text style={styles.waitingText}>Waiting for sign...</Text>
              </>
            )}
          </LinearGradient>
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <View style={styles.instructionItem}>
            <View style={styles.instructionDot} />
            <Text style={styles.instructionText}>Keep your hand steady</Text>
          </View>
          <View style={styles.instructionItem}>
            <View style={styles.instructionDot} />
            <Text style={styles.instructionText}>Ensure good lighting</Text>
          </View>
          <View style={styles.instructionItem}>
            <View style={styles.instructionDot} />
            <Text style={styles.instructionText}>Make clear gestures</Text>
          </View>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing['3xl'],
    paddingHorizontal: spacing.screenPaddingHorizontal,
    paddingBottom: spacing.lg,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: '#FFFFFF',
  },
  placeholder: {
    width: 44,
  },
  scanFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  scanBorder: {
    width: 280,
    height: 280,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#FFFFFF',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: spacing.radius.lg,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: spacing.radius.lg,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: spacing.radius.lg,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: spacing.radius.lg,
  },
  scanText: {
    marginTop: spacing.xl,
    fontSize: typography.sizes.base,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  predictionContainer: {
    paddingHorizontal: spacing.screenPaddingHorizontal,
    paddingBottom: spacing.xl,
  },
  predictionCard: {
    borderRadius: spacing.radius['2xl'],
    padding: spacing.xl,
    alignItems: 'center',
  },
  predictionLabel: {
    fontSize: typography.sizes.sm,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: spacing.xs,
  },
  predictionLetter: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.bold,
    color: '#FFFFFF',
    marginBottom: spacing.sm,
  },
  confidenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confidenceDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary.green,
    marginRight: spacing.xs,
  },
  confidenceText: {
    fontSize: typography.sizes.sm,
    color: '#FFFFFF',
  },
  handIcon: {
    marginBottom: spacing.md,
  },
  waitingText: {
    fontSize: typography.sizes.base,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  instructionsContainer: {
    paddingHorizontal: spacing.screenPaddingHorizontal,
    paddingBottom: spacing['2xl'],
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  instructionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginRight: spacing.sm,
  },
  instructionText: {
    fontSize: typography.sizes.sm,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  permissionTitle: {
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  permissionText: {
    fontSize: typography.sizes.base,
    textAlign: 'center',
    lineHeight: typography.lineHeights.relaxed * typography.sizes.base,
    marginBottom: spacing.xl,
  },
  permissionButton: {
    width: '100%',
    borderRadius: spacing.radius.lg,
    overflow: 'hidden',
  },
  permissionGradient: {
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  permissionButtonText: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    color: '#FFFFFF',
  },
});

export default CameraPredictScreen;
