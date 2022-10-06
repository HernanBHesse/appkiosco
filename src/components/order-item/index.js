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

const OrderItem = ({ item, onCancel }) => {
  const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formDate(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.price}>Total: $ {item.total}</Text>
        <TouchableOpacity onPress={() => onCancel(item.id)}>
          <Ionicons name="close" size={24} color={colors.deleteButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
