import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import * as ExpoSplashScreen from 'expo-splash-screen';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  withSequence,
  withDelay,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThezarLogo } from '@/components/ThezarLogo';
import { Colors } from '@/constants/config';

// Keep native splash visible until component mounts
ExpoSplashScreen.preventAutoHideAsync().catch(() => {});

const { width } = Dimensions.get('window');

export default function SplashScreen() {
  const [navigated, setNavigated] = useState(false);

  // Logo & Content animation values
  const logoScale = useSharedValue(0.7);
  const logoOpacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const contentTranslateY = useSharedValue(20);
  const glowScale = useSharedValue(0.95);
  const containerOpacity = useSharedValue(1);

  // Buffering animation values
  const spinRotation = useSharedValue(0);
  const pulseScale = useSharedValue(1);
  const dot1Opacity = useSharedValue(0.3);
  const dot2Opacity = useSharedValue(0.3);
  const dot3Opacity = useSharedValue(0.3);

  const navigateToNext = () => {
    if (navigated) return;
    setNavigated(true);
    router.replace('/auth/login');
  };

  useEffect(() => {
    // Hide native splash once React component renders
    ExpoSplashScreen.hideAsync().catch(() => {});

    // Logo entrance
    logoScale.value = withSpring(1, {
      damping: 13,
      stiffness: 90,
      mass: 0.9,
    });
    logoOpacity.value = withTiming(1, {
      duration: 700,
      easing: Easing.out(Easing.cubic),
    });

    // Ambient glow pulse
    glowScale.value = withRepeat(
      withSequence(
        withTiming(1.22, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.95, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    // Buffering spinner continuous rotation
    spinRotation.value = withRepeat(
      withTiming(360, { duration: 1100, easing: Easing.linear }),
      -1,
      false
    );

    // Buffering pulse
    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.15, { duration: 600, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.9, { duration: 600, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    // Sequential pulsing dots
    dot1Opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 350 }),
        withTiming(0.25, { duration: 350 }),
        withTiming(0.25, { duration: 350 })
      ),
      -1,
      false
    );
    dot2Opacity.value = withDelay(
      200,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 350 }),
          withTiming(0.25, { duration: 350 }),
          withTiming(0.25, { duration: 350 })
        ),
        -1,
        false
      )
    );
    dot3Opacity.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 350 }),
          withTiming(0.25, { duration: 350 }),
          withTiming(0.25, { duration: 350 })
        ),
        -1,
        false
      )
    );

    // Text & buffering UI entrance
    contentOpacity.value = withDelay(
      350,
      withTiming(1, { duration: 600, easing: Easing.out(Easing.cubic) })
    );
    contentTranslateY.value = withDelay(
      350,
      withSpring(0, { damping: 14, stiffness: 100 })
    );

    // Auto navigate after buffering completes (~2.8s)
    const timer = setTimeout(() => {
      containerOpacity.value = withTiming(0, { duration: 350 }, () => {
        runOnJS(navigateToNext)();
      });
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  const animatedGlowStyle = useAnimatedStyle(() => ({
    transform: [{ scale: glowScale.value }],
  }));

  const animatedContentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateY: contentTranslateY.value }],
  }));

  const animatedSpinnerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spinRotation.value}deg` }],
  }));

  const animatedPulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  const animatedDot1Style = useAnimatedStyle(() => ({
    opacity: dot1Opacity.value,
  }));
  const animatedDot2Style = useAnimatedStyle(() => ({
    opacity: dot2Opacity.value,
  }));
  const animatedDot3Style = useAnimatedStyle(() => ({
    opacity: dot3Opacity.value,
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* Background Ambient Glow */}
        <Animated.View style={[styles.ambientGlow, animatedGlowStyle]} />

        {/* Center Section: Logo + Title */}
        <View style={styles.centerSection}>
          <Animated.View style={[styles.logoWrapper, animatedLogoStyle]}>
            <ThezarLogo size="hero" showGlow={false} />
          </Animated.View>

          <Animated.View style={[styles.textWrapper, animatedContentStyle]}>
            <Text style={styles.brandTitle}>THEZAR</Text>
            <View style={styles.badgeRow}>
              <View style={styles.goldLine} />
              <Text style={styles.badgeText}>OFFICIAL PORTAL</Text>
              <View style={styles.goldLine} />
            </View>
            <Text style={styles.subtitle}>
              Candidate Access & Competition Hub
            </Text>
          </Animated.View>
        </View>

        {/* Bottom Section: Luxury Buffering Animation & Skip Option */}
        <Animated.View style={[styles.bottomSection, animatedContentStyle]}>
          {/* Buffering Indicator */}
          <View style={styles.bufferingWrapper}>
            {/* Spinning Dual-Arc Loader */}
            <View style={styles.spinnerContainer}>
              <Animated.View style={[styles.spinnerRing, animatedSpinnerStyle]}>
                <View style={styles.spinnerArcPrimary} />
                <View style={styles.spinnerArcSecondary} />
              </Animated.View>
              {/* Center pulsing core dot */}
              <Animated.View style={[styles.spinnerCenterDot, animatedPulseStyle]} />
            </View>

            {/* Buffering Label with Animated Dots */}
            <View style={styles.bufferingTextRow}>
              <Text style={styles.bufferingText}>Loading candidate portal</Text>
              <View style={styles.dotsRow}>
                <Animated.View style={[styles.dot, animatedDot1Style]} />
                <Animated.View style={[styles.dot, animatedDot2Style]} />
                <Animated.View style={[styles.dot, animatedDot3Style]} />
              </View>
            </View>
          </View>

          {/* Quick Enter Action */}
          <TouchableOpacity
            style={styles.enterButton}
            onPress={navigateToNext}
            activeOpacity={0.8}
          >
            <Text style={styles.enterButtonText}>CONTINUE</Text>
            <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.versionText}>THEZAR 2026 • Tirunelveli Round 2</Text>
        </Animated.View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071426', // Deep luxury slate/navy
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  ambientGlow: {
    position: 'absolute',
    top: '26%',
    width: width * 0.92,
    height: width * 0.92,
    borderRadius: (width * 0.92) / 2,
    backgroundColor: '#E11D4815',
    shadowColor: '#D4A72C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 65,
    elevation: 0,
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#D4A72C',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 26,
    elevation: 8,
  },
  textWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  brandTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 6,
    textAlign: 'center',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
  },
  goldLine: {
    width: 26,
    height: 1.5,
    backgroundColor: '#D4A72C',
    borderRadius: 1,
  },
  badgeText: {
    color: '#D4A72C',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 14 : 22,
  },
  bufferingWrapper: {
    alignItems: 'center',
    marginBottom: 26,
    gap: 12,
  },
  spinnerContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  spinnerRing: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: '#D4A72C', // Gold arc
    borderRightColor: '#E11D48', // Crimson arc
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  spinnerArcPrimary: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D4A72C',
    shadowColor: '#D4A72C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  spinnerArcSecondary: {
    position: 'absolute',
    bottom: -2,
    left: 6,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#E11D48',
  },
  spinnerCenterDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D4A72C',
    shadowColor: '#D4A72C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  bufferingTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bufferingText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginLeft: 2,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D4A72C',
  },
  enterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(225, 29, 72, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(225, 29, 72, 0.45)',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 22,
    marginBottom: 16,
  },
  enterButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  versionText: {
    color: '#475569',
    fontSize: 10,
    letterSpacing: 1,
  },
});
