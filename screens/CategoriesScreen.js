import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  console.log("CategoriesScreen", props);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
});

export default CategoriesScreen;
