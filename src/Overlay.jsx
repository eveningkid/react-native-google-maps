import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function Overlay({ panY }) {
  const { height } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        panY.value,
        [0, -height],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        StyleSheet.absoluteFill,
        styles.container,
        animatedStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

