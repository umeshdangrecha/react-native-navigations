import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailScreen from "../screens/MealDetailScreen";

export const MealsNavigatorScreens = {
  CategoriesScreen: "CategoriesScreen",
  CategoryMeals: "CategoryMeals",
  MealDetail: "MealDetail",
};

const MealsNavigator = createStackNavigator({
  [MealsNavigatorScreens.CategoriesScreen]: CategoriesScreen,
  [MealsNavigatorScreens.CategoryMeals]: {
    screen: CategoryMeals,
  },
  [MealsNavigatorScreens.MealDetail]: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
