import React from "react";
import { View, StyleSheet } from "react-native";

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/eco-loading.json';

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoplay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    backgroundColor: 'transparent'
  }
})