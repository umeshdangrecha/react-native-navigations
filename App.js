import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealNavigator from "./navigation/MealNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();
const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={() => setFontLoaded(true)}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <MealNavigator />;
}
