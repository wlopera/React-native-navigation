import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
// import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = ({ route }) => {
  // Se puede utyilizar el useRoute de "@react-navigation/native o desde el props
  // const route = useRoute()
  // const categoryId = route.params.categoryId;

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
