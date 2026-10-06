import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { Image, ImageStyle } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export type ThezarLogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';

interface ThezarLogoProps {
  size?: ThezarLogoSize | number;
  variant?: 'transparent' | 'original';
  showGlow?: boolean;
  animated?: boolean;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const SIZE_MAP: Record<ThezarLogoSize, { width: number; height: number }> = {
  xs: { width: 42, height: 30 },
  sm: { width: 70, height: 50 },
  md: { width: 112, height: 80 },
  lg: { width: 168, height: 120 },
  xl: { width: 224, height: 160 },
  hero: { width: 280, height: 200 },
};

export function ThezarLogo({
  size = 'md',
  variant = 'transparent',
  showGlow = false,
  animated = false,
  style,
  imageStyle,
}: ThezarLogoProps) {
  const dimensions = typeof size === 'number'
    ? { width: Math.round(size * 1.4), height: size }
    : SIZE_MAP[size] || SIZE_MAP.md;

  const glowScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.45);

  React.useEffect(() => {
    if (animated || showGlow) {
      glowScale.value = withRepeat(
        withTiming(1.18, { duration: 2400, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
      glowOpacity.value = withRepeat(
        withTiming(0.75, { duration: 2400, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    }
  }, [animated, showGlow, glowScale, glowOpacity]);

  const animatedGlowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: glowScale.value }],
      opacity: glowOpacity.value,
    };
  });

  const source = variant === 'original'
    ? require('@/assets/images/thezar-logo.png')
    : require('@/assets/images/thezar-logo-transparent.png');

  return (
    <View style={[styles.container, { width: dimensions.width, height: dimensions.height }, style]}>
      {showGlow && (
        <Animated.View
          style={[
            styles.glowEffect,
            {
              width: dimensions.width * 0.9,
              height: dimensions.height * 0.9,
              borderRadius: dimensions.height / 2,
            },
            animatedGlowStyle,
          ]}
        />
      )}
      <Image
        source={source}
        style={[
          styles.image,
          { width: dimensions.width, height: dimensions.height },
          imageStyle,
        ]}
        contentFit="contain"
        transition={250}
        accessibilityLabel="Thezar Logo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  glowEffect: {
    position: 'absolute',
    backgroundColor: '#D4A72C33', // Soft golden glow
    shadowColor: '#E11D48',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 28,
  },
  image: {
    aspectRatio: 1.4,
  },
});

export default ThezarLogo;
