import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function SearchBar({ panY }) {
  const { height } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const hidden = panY.value < -(height / 3);

    return {
      transform: [
        {
          translateY: withTiming(hidden ? -150 : 0),
        },
      ],
    };
  });

  return (
    <Animated.View
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
    marginTop: 10,
    marginHorizontal: '5%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

