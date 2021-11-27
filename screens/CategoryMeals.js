import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MealsNavigatorScreens } from "../navigation/MealNavigator";

const CategoryMeals = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CategoryMeals</Text>
      <Button
        title="Go to meals Detail Screen"
        onPress={() => {
          props.navigation.navigate({
            routeName: MealsNavigatorScreens.MealDetail,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryMeals;
