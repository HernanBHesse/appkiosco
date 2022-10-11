//React
import React from "react";

//Navigation
import AppNavigator from "./src/navigation/index";

//Fonts
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

//redux
import { Provider } from "react-redux";
//Store
import store from "./src/store";

//App
export default function App() {
  const [loaded] = useFonts({
    LRegular: require("./assets/fonts/Lato-Regular.ttf"),
    LLight: require("./assets/fonts/Lato-Light.ttf"),
    LBold: require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
