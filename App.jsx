import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import { useSharedValue } from 'react-native-reanimated';
import SearchBar from './src/SearchBar';
import Overlay from './src/Overlay';
import NavBar from './src/NavBar';
import GeoBar from './src/GeoBar';
import BottomSheet from './src/BottomSheet';
import PicturesCarousel from './src/PicturesCarousel';

export default function App() {
  const { width, height } = useWindowDimensions();

  const y = useSharedValue(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <MapView
        initialRegion={{
          latitude: 35.679453,
          longitude: 139.6887197,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        }}
        style={{ width, height }}
      />

      <GeoBar panY={y} />

      <Overlay panY={y} />

      <PicturesCarousel panY={y} />

      <BottomSheet panY={y} />

      <SafeAreaView
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      >
        <View style={styles.container}>
          <SearchBar panY={y} />
          <NavBar panY={y} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

