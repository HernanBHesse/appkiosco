//React
import React from "react";

//React Native
import { View } from "react-native";
import { ProductDetail } from "../../components";

//redux
import { useSelector } from "react-redux";

//Styles
import { styles } from "./styles.js";

//Component
const Product = () => {
const product = useSelector((state) => state.products.selected)

  return (
    <View style={styles.container}>
      <ProductDetail item={product} />
    </View>
  );
};

export default Product;
