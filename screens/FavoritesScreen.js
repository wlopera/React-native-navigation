import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";

import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../components/MealList/MealList";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMailsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMailsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No tienes Comidas Favoritas seleccionadas!
        </Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
