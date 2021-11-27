import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedData = CATEGORIES.find((item) => item.id === catId);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CategoryMeals</Text>
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  // console.log("CategoryMeals", navigationData);
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedData = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectedData.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};
const styles = StyleSheet.create({});

export default CategoryMeals;
