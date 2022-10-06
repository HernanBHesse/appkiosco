//React
import React from "react";

//React Native
import { View, Text, TouchableOpacity } from "react-native";

//Styles
import { styles } from "./styles";

//Constants
import { colors } from "../../constants/themes";

//icons
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.quantity}>Cantidad {item.quantity}</Text>
        <Text style={styles.price}>$ {item.price*item.quantity}</Text>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons
            name="trash-outline"
            size={24}
            color={colors.deleteButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
