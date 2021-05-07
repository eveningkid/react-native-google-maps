import React from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const IMAGES = [
  'https://lh5.googleusercontent.com/p/AF1QipPVL19xwWdTqGRq0OJaijq28AxKP_34ww8fOXOa=s1013-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipMOSlEF_obIrLiP6Q7xM8UHyn4jnDhLezCrjvR7=s773-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipOA7zoRS0zXE6ntoOMPKJZFGcJKmAUKM-NOEWHg=s773-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipPfag6TLyhgDdDGWxXBPkgEgmmdBeZFD2lIEfBO=s872-k-no',
];

export default function PicturesCarousel({ panY }) {
  const { height, width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            panY.value,
            [0, -(height * 0.6)],
            [0, -height],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.container, { top: height * 0.9 }, animatedStyle]}
    >
      {IMAGES.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={{ height: height * 0.4, width: width * 0.7 }}
          resizeMode="cover"
        />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
});

