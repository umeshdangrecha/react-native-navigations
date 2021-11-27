import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

export const MealsNavigatorScreens = {
  CategoriesScreen: "CategoriesScreen",
  CategoryMeals: "CategoryMeals",
  MealDetail: "MealDetail",
};

const MealsNavigator = createStackNavigator(
  {
    [MealsNavigatorScreens.CategoriesScreen]: {
      screen: CategoriesScreen,
    },
    [MealsNavigatorScreens.CategoryMeals]: {
      screen: CategoryMeals,
    },
    [MealsNavigatorScreens.MealDetail]: MealDetailScreen,
  },
  {
    initialRouteName: MealsNavigatorScreens.CategoriesScreen, //you can set or omit

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
