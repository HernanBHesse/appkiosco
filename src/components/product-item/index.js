//React
import React from "react";

//React Native
import { View, Text, TouchableOpacity } from "react-native";

//Styles
import { styles } from "./styles";

const ProductItem = ({ item, onSelected, categoryColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: categoryColor }}
        onPress={() => onSelected(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>$ {item.price}</Text>
          <Text style={styles.detail}>Peso: {item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
