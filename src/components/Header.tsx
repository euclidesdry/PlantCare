import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform
} from "react-native";

import { getStatusBarHeight as getIphoneXStatusBarHeight} from "react-native-iphone-x-helper";
import { getStatusBarHeight as getAndroidStatusBarHeght } from "react-native-status-bar-height";

//Styles
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Assets
import userImage from "../assets/EuclidesdryProfileImage.png";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() { 
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user_name = await AsyncStorage.getItem('@plantcare:userName');

      setUserName(user_name || '');
    }

    loadStorageUserName();
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      
      <Image source={userImage} style={styles.userImage}/>
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
    marginTop: Platform.OS === 'ios' ? getIphoneXStatusBarHeight() : getAndroidStatusBarHeght(),
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading
  }
})