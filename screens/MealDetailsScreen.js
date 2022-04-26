import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const headerButtonPressHandler = () => {
    console.log("Botón Presionado");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Presióname" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  const mealId = route.params.mealId;

  const seletedMeal = MEALS.find((meal) => meal.id === mealId);

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
