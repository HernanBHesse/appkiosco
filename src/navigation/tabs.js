//React
import React from "react";

//icons
import { Ionicons } from "@expo/vector-icons";

//Button Tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Navigation
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Tienda",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "apps":"apps-outline"} size={30} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: "Ordenes",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "archive":"archive-outline"} size={30} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "cart":"cart-outline"} size={30} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
