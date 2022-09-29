//React
import React from "react";

//React Native
import { View, Text, Button } from "react-native";

//Styles
import styles from "./styles.js";

//Component
const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.primaryContainer}>
        <Text style={styles.text}>Product List</Text>
        <Button
          title="Volver a categorías"
          onPress={() => navigation.navigate("Categories")}
          color="#263f6a"
        />
        <View style={styles.secondaryContainer}>
            <Button title="Alfajor" onPress={() => navigation.navigate("Product")} color="#562e19"/>
            <Button title="Caramelo" onPress={() => navigation.navigate("Product")} color="#b62b6e"/>
            <Button title="Gaseosa" onPress={() => navigation.navigate("Product")} color="#ed1c16"/>
        </View>
      </View>
    </View>
  );
};

export default Products;
