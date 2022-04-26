import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import React from "react";
import MealDetails from "./MealDetails";

const MealItem = ({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMailItemHandler = () => {
    navigation.navigate("MealDetail", { mealId: mealId });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMailItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity.toUpperCase()}
            affordability={affordability.toUpperCase()}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 8,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
