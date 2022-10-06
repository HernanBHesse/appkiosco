//React
import React from "react";

//React Native
import { View, Text, FlatList, TouchableOpacity } from "react-native";

//Data
import { orders } from "../../constants/data";

//Component
import { OrderItem } from "../../components/";

//Styles
import { styles } from "./styles";

const Cart = ({ navigation }) => {
  const onCancel = (id) => {
    console.warn("Cancelada", id);
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onCancel={onCancel} />
  );

  return (
    <View style={styles.container}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
};

export default Cart;
