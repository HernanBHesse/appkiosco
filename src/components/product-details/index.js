//React
import React from "react";

//React Native
import { View, Text } from "react-native";

//Styles
import { styles } from "./styles";

const ProductDetail = ( {item} ) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title} ID: {item.id}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>$ {item.price}</Text>
          <Text style={styles.detail}>Peso: {item.weight}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{item.description}</Text>
        </View>
      </View>
    </>
  );
};

export default ProductDetail;
