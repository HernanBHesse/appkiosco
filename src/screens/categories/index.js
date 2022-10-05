//React
import React from "react";

//React Native
import { FlatList } from "react-native";

//Component
import { CategoryItem } from "../../components/index";

//Constants
import { categories } from "../../constants/data";

//Styles
import { styles } from "./styles";

//Component
const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", { name: item.title, categoryId: item.id, categoryColor: item.color});
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      style={styles.containerFlatList}
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Categories;
