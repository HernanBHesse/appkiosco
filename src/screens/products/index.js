//React
import React, { useEffect } from "react";

//React Native
import { FlatList } from "react-native";

//Component
import { ProductItem } from "../../components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts, selectedProducts } from "../../store/actions";

//Styles
import { styles } from "./styles";

//Component
const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selected);

  const productsFiltered = useSelector((state) => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);
  
  const onSelected = (item) => {
    dispatch(selectedProducts(item.id));
    navigation.navigate("Product", { name: item.title });
  };

  const renderItem = ({ item }) => {
    return (
      <ProductItem
        item={item}
        onSelected={onSelected}
        categoryColor={selectedCategory.color}
      />
    );
  };

  return (
    <FlatList
      style={styles.containerFlatList}
      horizontal={false}
      numColumns={2}
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Products;
