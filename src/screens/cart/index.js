//React
import React from "react";

//React Native
import { View, Text } from "react-native";

//Styles
import { styles } from "./styles";

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
};

export default Cart;