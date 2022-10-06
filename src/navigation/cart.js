//React
import React from "react";

//Functions
import { isAndroid } from "../utils";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import { Cart } from "../screens";

//Constants
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontFamily: "LBold",
        },
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
