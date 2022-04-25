import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailsScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  console.log(333, categoryId);
  return (
    <View style={styles.mealDetail}>
      <View style={styles.details}>
        <Text>Pantalla de detalles {categoryId}</Text>
      </View>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  mealDetail: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },

  details: {
    flex: 1,
  },
});
