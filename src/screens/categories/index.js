//React
import React from "react";

//React Native
import { FlatList } from "react-native";

//Component
import { CategoryItem } from "../../components/index";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions";

//Styles
import { styles } from "./styles";

//Component
const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", { name: item.title });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      style={styles.containerFlatList}
      horizontal={false}
      numColumns={2}
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Categories;
