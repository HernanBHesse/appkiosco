//React
import React from "react";

//React Native
import { FlatList } from "react-native";

//Component
import { ProductItem } from "../../components";

//Data
import { products } from "../../constants/data";

//Styles
import { styles } from "./styles";

//Component
const Products = ({ navigation, route }) => {
  const { categoryId, categoryColor } = route.params;

  const productsFiltered = products.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("Product", { name: item.name, productId: item.id });
  };

  const renderItem = ({ item }) => {
    return <ProductItem item={item} onSelected={onSelected} categoryColor={categoryColor}/>;
  };
  
  return (
    <FlatList
      style={styles.containerFlatList}
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Products;
