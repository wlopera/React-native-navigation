import { useContext, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const seletedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  // const changeFavoriteStatusHandler = () => {
  //   if (mealIsFavorite) {
  //     favoriteMealsCtx.removeFavorites(mealId);
  //   } else {
  //     favoriteMealsCtx.addFavorites(mealId);
  //   }
  // };

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        //return <Button title="Presióname" onPress={headerButtonPressHandler} />;
        return (
          <IconButton
            name={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = seletedMeal;
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <MealDetails
        duration={duration}
        complexity={complexity.toUpperCase()}
        affordability={affordability.toUpperCase()}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredientes</Subtitle>
          <List data={ingredients} />

          <Subtitle>Preparación</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },

  detailText: {
    color: "lightgreen",
    fontSize: 16,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },

  listOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },
});
