import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import colors from "../styles/colors";

// Pages
import { MyPlants } from "../pages/MyPlants";
import { PlantSelect } from "../pages/PlantSelect";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingTop: Platform.OS === 'android' ? 0 : 20, 
          paddingVertical: 20,
          height: 88
        }
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color}) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />))
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color}) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />))
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes;