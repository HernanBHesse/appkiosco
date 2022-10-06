//React
import React from "react";

//Functions
import { isAndroid } from "../utils";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import { Orders } from "../screens";

//Constants
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
