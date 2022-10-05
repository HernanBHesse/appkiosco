//React
import React from "react";

//React Native
import { View, Text, Button } from "react-native";
import { ProductDetail } from "../../components";

//Data
import { products } from "../../constants/data";

//Styles
import { styles } from "./styles.js";

//Component
const Product = ({ navigation, route }) => {
  const { productId } = route.params;

  let product = products.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <ProductDetail item={product} />
    </View>
  );
};

export default Product;
