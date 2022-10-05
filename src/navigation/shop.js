//React
import React from "react";

//Navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import { Categories, Product, Products } from "../screens";

//Constants
import { colors } from "../constants/themes";

//Functions
import { isAndroid } from "../utils";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
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
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Categorías" }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
