//React
import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";

//Shop Navigation
// import ShopNavigator from "./shop";

//Tabs Navigator
import TabsNavigator from "./tabs"

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
