import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icon from './Icon';

export default function NavBar({ panY }) {
  const { height } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const hidden = panY.value > -(height / 3);

    return {
      opacity: withTiming(hidden ? 0 : 1),
    };
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        styles.container,
        animatedStyle,
      ]}
    >
      <View style={styles.icon}>
        <Icon name="chevron-down" size={28} color="white" />
      </View>

      <View style={styles.rightIcons}>
        <View style={[styles.icon, styles.iconMargin]}>
          <Icon name="share-outline" size={28} color="white" />
        </View>

        <View style={styles.icon}>
          <Icon name="ellipsis-horizontal" size={28} color="white" />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  iconMargin: {
    marginRight: 10,
  },
});

