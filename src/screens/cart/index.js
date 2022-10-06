//React
import React from "react";

//React Native
import { View, Text, FlatList, TouchableOpacity } from "react-native";

//Data
import { cart } from "../../constants/data";

//Component
import { CartItem } from "../../components/";

//Styles
import { styles } from "./styles";

const Cart = ({ navigation }) => {
  const total = 2600;

  const onDelete = (id) => {
    console.warn("Eliminado", id);
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.textButton}>Comprar</Text>
          <Text style={styles.totalText}>Su total: ${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
