import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
