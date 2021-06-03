import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from './stack.routes';
// Styles
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
)

export default Routes;
