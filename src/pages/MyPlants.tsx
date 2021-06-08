import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

// Styles
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Components
import { Header } from "../components/Header";

export function MyPlants() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  }
})