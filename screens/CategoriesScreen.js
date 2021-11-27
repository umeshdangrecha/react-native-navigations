import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { MealsNavigatorScreens } from "../navigation/MealNavigator";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};
const CategoriesScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
