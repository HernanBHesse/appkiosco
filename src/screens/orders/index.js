//React
import React from "react";

//React Native
import { View, Text } from "react-native";

//Styles
import { styles } from "./styles";

const Orders = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orders</Text>
    </View>
  );
};

export default Orders;