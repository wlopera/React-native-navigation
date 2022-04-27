import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = ({ route, navigation }) => {
  // Se puede utyilizar el useRoute de "@react-navigation/native o desde el props
  // const route = useRoute()
  // const categoryId = route.params.categoryId;

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
