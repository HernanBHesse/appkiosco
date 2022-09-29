//React
import React from "react";

//React Native

//Component

//Navigation
import AppNavigator from "./src/navigation";

//Fonts
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

//App
export default function App() {
  const [loaded] = useFonts({
    'LRegular': require("./assets/fonts/Lato-Regular.ttf"),
    'LLight': require("./assets/fonts/Lato-Light.ttf"),
    'LBold': require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <AppNavigator />;
}
