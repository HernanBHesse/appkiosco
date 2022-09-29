//React
import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
//Shop Navigation
import ShopNavigator from "./shop";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
