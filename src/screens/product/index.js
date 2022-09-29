//React
import React from "react";

//React Native
import { View, Text, Button } from "react-native";

//Styles
import styles from "./styles.js";

//Component
const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Item Details</Text>
      <Button
        title="Volver a productos"
        onPress={() => navigation.navigate("Products")}
        color="#263f6a"
      />
    </View>
  );
};

export default Product;
