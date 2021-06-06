import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform
} from "react-native";

import { getStatusBarHeight as getIphoneXStatusBarHeight} from "react-native-iphone-x-helper";
import { getStatusBarHeight as getAndroidStatusBarHeght } from "react-native-status-bar-height";

import colors from "../styles/colors";

export function Header() { 
  return (
    <View style={styles.container}>
      <View>
        <Text>Olá, </Text>
        <Text>Euclides</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: Platform.OS === 'ios' ? getIphoneXStatusBarHeight() : getAndroidStatusBarHeght()
  }
})